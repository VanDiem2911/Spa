"use client";

import React, { useState } from "react";
import { businessInfo, services } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import { MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: services[0].title,
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg("Vui lòng điền Họ tên và Số điện thoại để OMI SPA liên hệ.");
      return;
    }
    // Set success state
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="py-28 md:py-36 bg-[#4A151D] text-[#F8F5EF] relative overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6E1F2A]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#292624]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#EDE5DA]/50" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#EDE5DA]/80">
                  04 / ĐẶT LỊCH HẸN
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal leading-tight text-[#F8F5EF]">
                Đặt Lịch Tại{" "}
                <span className="italic font-display block text-[#EDE5DA]">
                  OMI SPA
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#EDE5DA]/80 font-light leading-relaxed max-w-md pt-2">
                Dành cho bản thân một khoảng lặng thư thái. Hãy để lại thông tin hoặc gọi điện trực tiếp để chúng tôi chuẩn bị chu đáo nhất cho trải nghiệm của bạn.
              </p>
            </div>

            {/* Quick Contact Points */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-[#EDE5DA]/85">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#EDE5DA] shrink-0 mt-0.5" />
                <span>{businessInfo.fullAddress}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#EDE5DA] shrink-0" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="hover:text-white font-medium tracking-wide underline underline-offset-4 decoration-white/30"
                >
                  {businessInfo.displayPhone} (Zalo)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#EDE5DA] shrink-0" />
                <span>
                  {businessInfo.openingHours} • {businessInfo.openingDays}
                </span>
              </div>
            </div>

            {/* Direct Call / Zalo CTA */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`tel:${businessInfo.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#EDE5DA] text-[#4A151D] text-xs uppercase tracking-widest font-medium hover:bg-white transition-all shadow-md"
              >
                <span>Gọi Trực Tiếp: {businessInfo.displayPhone}</span>
              </a>
              <a
                href={`https://zalo.me/${businessInfo.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 border border-white/20 text-[#EDE5DA] text-xs uppercase tracking-widest font-medium hover:bg-white/20 transition-all"
              >
                <span>Nhắn Tin Zalo</span>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#292624]/50 backdrop-blur-md border border-white/10 p-8 sm:p-10 md:p-12 rounded-sm shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#6E1F2A]/80 border border-[#EDE5DA]/30 flex items-center justify-center mx-auto text-[#EDE5DA]">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#F8F5EF]">
                      Thông Tin Đã Được Ghi Nhận
                    </h3>
                    <p className="text-sm text-[#EDE5DA]/80 font-light max-w-md mx-auto leading-relaxed">
                      Cảm ơn Quý khách <strong className="text-white">{formData.fullName}</strong>. Đội ngũ OMI SPA sẽ liên hệ lại qua số điện thoại <strong className="text-white">{formData.phone}</strong> trong thời gian sớm nhất để xác nhận lịch hẹn.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        service: services[0].title,
                        date: "",
                        time: "",
                        notes: "",
                      });
                    }}
                    className="text-xs uppercase tracking-widest text-[#EDE5DA]/80 hover:text-white underline underline-offset-4 pt-4"
                  >
                    Gửi yêu cầu đặt lịch khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#F8F5EF] pb-2 border-b border-white/10">
                    Phiếu Đăng Ký Trải Nghiệm
                  </h3>

                  {errorMsg && (
                    <div className="p-3 bg-red-900/40 border border-red-500/40 text-red-200 text-xs rounded-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="fullName"
                        className="text-xs uppercase tracking-wider text-[#EDE5DA]/75"
                      >
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        className="w-full bg-[#EDE5DA]/10 border border-white/15 rounded-sm px-4 py-3 text-sm text-[#F8F5EF] placeholder:text-[#EDE5DA]/30 focus:outline-none focus:border-[#EDE5DA]/60 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs uppercase tracking-wider text-[#EDE5DA]/75"
                      >
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0938 974 424"
                        className="w-full bg-[#EDE5DA]/10 border border-white/15 rounded-sm px-4 py-3 text-sm text-[#F8F5EF] placeholder:text-[#EDE5DA]/30 focus:outline-none focus:border-[#EDE5DA]/60 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="service"
                      className="text-xs uppercase tracking-wider text-[#EDE5DA]/75"
                    >
                      Dịch vụ quan tâm
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#292624] border border-white/15 rounded-sm px-4 py-3 text-sm text-[#F8F5EF] focus:outline-none focus:border-[#EDE5DA]/60 transition-colors"
                    >
                      {services.map((svc) => (
                        <option key={svc.id} value={svc.title} className="bg-[#292624] text-white">
                          {svc.title} — {svc.subtitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Date */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="date"
                        className="text-xs uppercase tracking-wider text-[#EDE5DA]/75"
                      >
                        Ngày mong muốn
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-[#EDE5DA]/10 border border-white/15 rounded-sm px-4 py-3 text-sm text-[#F8F5EF] focus:outline-none focus:border-[#EDE5DA]/60 transition-colors"
                      />
                    </div>

                    {/* Time */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="time"
                        className="text-xs uppercase tracking-wider text-[#EDE5DA]/75"
                      >
                        Khung giờ (09:00 - 20:00)
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-[#EDE5DA]/10 border border-white/15 rounded-sm px-4 py-3 text-sm text-[#F8F5EF] focus:outline-none focus:border-[#EDE5DA]/60 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="notes"
                      className="text-xs uppercase tracking-wider text-[#EDE5DA]/75"
                    >
                      Ghi chú thêm (nếu có)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Chia sẻ thêm về tình trạng căng mỏi hoặc yêu cầu đặc biệt..."
                      className="w-full bg-[#EDE5DA]/10 border border-white/15 rounded-sm px-4 py-3 text-sm text-[#F8F5EF] placeholder:text-[#EDE5DA]/30 focus:outline-none focus:border-[#EDE5DA]/60 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <MagneticButton
                      type="submit"
                      className="w-full py-4 rounded-sm bg-[#6E1F2A] hover:bg-[#8E2D3B] text-[#F8F5EF] text-xs uppercase tracking-[0.25em] font-medium shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 border border-white/10"
                    >
                      <span>Gửi Yêu Cầu Đặt Lịch</span>
                      <Send size={14} />
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
