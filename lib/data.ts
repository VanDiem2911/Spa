export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  image: string;
  altImage?: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  industry: string;
  city: string;
  address: string;
  district: string;
  fullAddress: string;
  openingHours: string;
  openingDays: string;
  contactPerson: string;
  phone: string;
  displayPhone: string;
  facebookUrl: string;
  googleMapsUrl: string;
  officialIntro: string;
}

export const businessInfo: BusinessInfo = {
  name: "OMI SPA",
  tagline: "Bảo dưỡng sức khoẻ",
  industry: "Spa / Thẩm mỹ / Làm đẹp",
  city: "Hồ Chí Minh",
  address: "159 Ba Vân",
  district: "P.14, Q. Tân Bình, TP. HCM",
  fullAddress: "159 Ba Vân, P.14, Q. Tân Bình, TP. HCM",
  openingHours: "09:00 – 20:00",
  openingDays: "Thứ 2 – Chủ nhật",
  contactPerson: "Ngọc Hân",
  phone: "0938974424",
  displayPhone: "0938 974 424",
  facebookUrl: "https://www.facebook.com/omispabaoduongsuckhoe",
  googleMapsUrl: "https://maps.app.goo.gl/ST5UqEudtVH58eRt5",
  officialIntro:
    "OMI SPA - Chuyên Massage Body, Massage trị liệu và Gội đầu dưỡng sinh, mang đến trải nghiệm thư giãn và phục hồi sức khỏe toàn diện. Không gian yên tĩnh, sạch sẽ, cùng đội ngũ kỹ thuật viên tay nghề cao giúp giảm đau nhức, giải tỏa căng thẳng.",
};

export const services: ServiceItem[] = [
  {
    id: "massage-body",
    number: "01",
    title: "MASSAGE BODY",
    subtitle: "Thư giãn toàn thân & phục hồi năng lượng",
    description:
      "Dành thời gian thư giãn và chăm sóc cơ thể sau những giờ làm việc căng thẳng.",
    benefits: [
      "Giải tỏa căng thẳng cơ bắp",
      "Kích thích tuần hoàn máu",
      "Tái tạo cảm giác nhẹ nhàng, sảng khoái",
    ],
    image: "/images/drive/real_01.jpg",
    altImage: "/images/drive/real_06.jpg",
  },
  {
    id: "massage-co-vai-gay",
    number: "02",
    title: "MASSAGE CỔ VAI GÁY",
    subtitle: "Chăm sóc chuyên sâu cho người làm việc văn phòng",
    description:
      "Phù hợp với người thường xuyên làm việc văn phòng và gặp cảm giác căng mỏi vùng cổ vai gáy.",
    benefits: [
      "Tập trung giảm áp lực vùng gáy",
      "Thả lỏng cơ bả vai và đốt sống cổ",
      "Phù hợp sau nhiều giờ ngồi máy tính",
    ],
    image: "/images/drive/real_03.jpg",
    altImage: "/images/drive/real_05.jpg",
  },
  {
    id: "goi-dau-duong-sinh",
    number: "03",
    title: "GỘI ĐẦU DƯỠNG SINH",
    subtitle: "Chăm sóc tóc, da đầu & thư giãn tinh thần",
    description:
      "Một trải nghiệm thư giãn nhẹ nhàng kết hợp chăm sóc tóc và da đầu.",
    benefits: [
      "Nước thảo mộc thanh dịu tự nhiên",
      "Massage bấm huyệt vùng đầu và trán",
      "Thư giãn sâu trong làn hương êm dịu",
    ],
    image: "/images/drive/real_07.jpg",
    altImage: "/images/drive/real_09.jpg",
  },
  {
    id: "massage-chan",
    number: "04",
    title: "MASSAGE CHÂN",
    subtitle: "Xoa dịu áp lực & nuôi dưỡng đôi chân",
    description:
      "Thư giãn đôi chân sau một ngày làm việc hoặc di chuyển nhiều.",
    benefits: [
      "Ngâm chân thảo dược ấm",
      "Xoa bóp và kích thích huyệt đạo bàn chân",
      "Phục hồi bước đi nhẹ nhõm",
    ],
    image: "/images/drive/real_10.jpg",
  },
];

export const galleryRealPhotos = [
  {
    title: "Không gian phòng trị liệu thực tế",
    subtitle: "159 Ba Vân, Tân Bình",
    src: "/images/drive/real_08.jpg",
  },
  {
    title: "Massage Body bấm huyệt",
    subtitle: "Kỹ thuật viên tay nghề cao",
    src: "/images/drive/real_01.jpg",
  },
  {
    title: "Chăm sóc cổ vai gáy chuyên sâu",
    subtitle: "Giảm đau mỏi dân văn phòng",
    src: "/images/drive/real_03.jpg",
  },
  {
    title: "Gội đầu dưỡng sinh thư giãn",
    subtitle: "Thảo mộc tự nhiên",
    src: "/images/drive/real_07.jpg",
  },
  {
    title: "Massage trị liệu đá nóng",
    subtitle: "Lưu thông khí huyết",
    src: "/images/drive/real_06.jpg",
  },
  {
    title: "Massage chân phục hồi",
    subtitle: "Xoa dịu áp lực bàn chân",
    src: "/images/drive/real_10.jpg",
  },
];

export const navLinks = [
  { label: "Không gian", href: "#about" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Hình ảnh", href: "#gallery" },
  { label: "Vì sao OMI", href: "#why-omi" },
  { label: "Vị trí", href: "#location" },
];

export const whyOmiPoints = [
  {
    title: "YÊN TĨNH",
    subtitle: "Khoảng lặng giữa lòng thành phố",
    detail: "Không gian cách biệt sự ồn ào bên ngoài, âm nhạc dịu nhẹ, ánh sáng ấm cúng mang lại cảm giác bình yên trọn vẹn.",
  },
  {
    title: "SẠCH SẼ",
    subtitle: "Tiêu chuẩn vệ sinh kỹ lưỡng",
    detail: "Khăn trải, dụng cụ và không gian luôn được khử khuẩn, thay mới tinh tươm cho từng lượt khách trải nghiệm.",
  },
  {
    title: "KỸ THUẬT VIÊN TAY NGHỀ CAO",
    subtitle: "Lực bấm chuẩn xác, ân cần",
    detail: "Đội ngũ được đào tạo bài bản, thấu hiểu điểm mỏi của cơ thể và điều chỉnh lực phù hợp theo từng thể trạng.",
  },
  {
    title: "THƯ GIÃN & PHỤC HỒI SỨC KHỎE",
    subtitle: "Chăm sóc toàn diện từ gốc",
    detail: "Tập trung giải tỏa căng mỏi và tái tạo năng lượng cho cơ thể sau những ngày dài làm việc căng thẳng.",
  },
];
