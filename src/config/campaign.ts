/**
 * Tệp cấu hình trung tâm cho chương trình:
 * TRI ÂN KHÁCH HÀNG – BỐC THĂM TRÚNG THƯỞNG
 * SHOWROOM TOTO PHÚ CƯỜNG
 * 
 * Chủ sở hữu có thể dễ dàng cập nhật thông tin liên hệ, thời gian, giải thưởng tại đây.
 */

export interface PrizeItem {
  id: string;
  rank: string;
  title: string;
  name: string;
  code: string;
  valueNumber: number;
  valueDisplay: string;
  image: string;
  features: string[];
  isGrand?: boolean;
}

export interface ShowroomPhoto {
  id: string;
  image: string;
  title: string;
  category: 'showroom' | 'customer' | 'certificate';
}

export interface CampaignConfig {
  brand: {
    prefix: string; // "SHOWROOM TOTO"
    name: string;   // "PHÚ CƯỜNG"
    fullName: string;
    logoImage: string;
    hotline: string;
    hotlineDisplay: string;
    websiteDomain: string;
    // Các trường tùy chọn: Chỉ hiển thị khi có thông tin chính thức
    address: string;
    venueName?: string;
    fullAddressDisplay?: string;
    fanpageUrl: string;
    zaloUrl: string;
    googleMapsUrl: string;
  };
  timeline: {
    title: string;
    startDateStr: string; // ISO 8601
    endDateStr: string;   // ISO 8601
    dateDisplay: string;  // "01/11/2026 – 19/12/2026"
    timezone: string;
  };
  financialSummary: {
    totalClaimValue: string;
    fullClaimTitle: string;
    shortClaimTitle: string;
    appreciationGiftNote: string;
  };
  hero: {
    badge: string;
    mainTitle: string;
    subTitle: string;
    description: string;
    bannerImage: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  conditions: {
    title: string;
    subtitle: string;
    rules: {
      id: number;
      tag: string;
      title: string;
      description: string;
      highlight?: boolean;
    }[];
    maxTicketsNotice: string;
    disclaimer: string;
  };
  prizes: PrizeItem[];
  participationSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  showroomPhotos: ShowroomPhoto[];
  faqs: {
    question: string;
    answer: string;
  }[];
  rulesModal: {
    title: string;
    sections: {
      heading: string;
      points: string[];
    }[];
  };
}

export const CAMPAIGN_CONFIG: CampaignConfig = {
  brand: {
    prefix: "SHOWROOM TOTO",
    name: "PHÚ CƯỜNG",
    fullName: "SHOWROOM TOTO PHÚ CƯỜNG",
    logoImage: "/assets/aistudio/Logo_Phhu_Cuong_cfd6b6ba.png",
    hotline: "tel:0912056534",
    hotlineDisplay: "0912 056 534",
    websiteDomain: "phucuongtt.com",
    venueName: "Siêu Thị Nội Thất Phú Cường",
    address: "748 Nguyễn Văn Linh, phường Phố Hiến, Hưng Yên",
    fullAddressDisplay: "Siêu Thị Nội Thất Phú Cường - 748 Nguyễn Văn Linh, P. Phố Hiến, Hưng Yên",
    fanpageUrl: "",
    zaloUrl: "",
    googleMapsUrl: "https://maps.google.com/?q=748+Nguyễn+Văn+Linh+phường+Phố+Hiến+Hưng+Yên",
  },

  timeline: {
    title: "TRI ÂN KHÁCH HÀNG – BỐC THĂM TRÚNG THƯỞNG",
    startDateStr: "2026-11-01T00:00:00+07:00",
    endDateStr: "2026-12-19T23:59:59+07:00",
    dateDisplay: "Từ 01/11/2026 đến hết 19/12/2026",
    timezone: "Asia/Ho_Chi_Minh",
  },

  financialSummary: {
    totalClaimValue: "lên đến 80.000.000 VNĐ",
    fullClaimTitle: "Tổng giá trị giải thưởng và quà tặng tri ân lên đến 80.000.000 VNĐ.",
    shortClaimTitle: "Tổng giá trị lên đến 80.000.000 VNĐ.",
    appreciationGiftNote: "Bên cạnh các giải bốc thăm, Phú Cường còn dành tặng quà tri ân cho khách hàng theo điều kiện của chương trình.",
  },

  hero: {
    badge: "CHƯƠNG TRÌNH TRI ÂN KHÁCH HÀNG",
    mainTitle: "MUA SẮM TẠI PHÚ CƯỜNG\nĐÓN CƠ HỘI TRÚNG QUÀ TOTO",
    subTitle: "BỐC THĂM TRÚNG THƯỞNG",
    description: "Mua hàng hoặc sử dụng dịch vụ đủ điều kiện tại Showroom TOTO Phú Cường để nhận phiếu bốc thăm và cơ hội sở hữu bộ quà tặng thiết bị vệ sinh cao cấp chính hãng TOTO. Bên cạnh các giải bốc thăm, Phú Cường còn dành tặng quà tri ân cho khách hàng theo điều kiện của chương trình.",
    bannerImage: "/assets/aistudio/Modern_bathroom_banner_with_seamless_mirror_reflection_abde5e4f.png",
    ctaPrimary: "Gọi tư vấn chương trình",
    ctaSecondary: "Khám phá giải thưởng",
  },

  conditions: {
    title: "ĐIỀU KIỆN THAM GIA NHẬN PHIẾU",
    subtitle: "Dành riêng cho khách hàng mua sắm hoặc sử dụng dịch vụ tại Showroom TOTO Phú Cường",
    rules: [
      {
        id: 1,
        tag: "ĐIỀU KIỆN 1",
        title: "Đơn hàng từ 30 triệu đồng",
        description: "Cứ mỗi 30 triệu đồng mua hàng hoặc sử dụng dịch vụ tại Showroom TOTO Phú Cường: nhận ngay 01 phiếu bốc thăm trúng thưởng.",
      },
      {
        id: 2,
        tag: "ĐIỀU KIỆN 2",
        title: "Sản phẩm công nghệ cao cấp",
        description: "Đơn hàng có ít nhất 01 nắp rửa điện tử WASHLET, bàn cầu điện tử hoặc bàn cầu NEOREST TOTO: nhận ngay 01 phiếu bốc thăm.",
        highlight: true,
      },
      {
        id: 3,
        tag: "ĐIỀU KIỆN 3",
        title: "Đặc quyền đơn hàng trên 100 triệu",
        description: "Đơn hàng có giá trị trên 100 triệu đồng: tặng thêm 01 phiếu bốc thăm tri ân may mắn.",
      },
    ],
    maxTicketsNotice: "Lưu ý quan trọng: Mỗi khách hàng nhận tối đa 03 phiếu bốc thăm trong suốt toàn bộ thời gian diễn ra chương trình.",
    disclaimer: "Phiếu bốc thăm hợp lệ do Showroom TOTO Phú Cường phát hành kèm mã số đối soát và hóa đơn mua hàng tương ứng.",
  },

  prizes: [
    {
      id: "grand",
      rank: "GIẢI ĐẶC BIỆT",
      title: "Giải Đặc Biệt TOTO",
      name: "Bàn cầu TOTO một khối kèm nắp rửa điện tử",
      code: "MS889CDRW25#XW",
      valueNumber: 34354000,
      valueDisplay: "34.354.000 VNĐ",
      image: "/assets/aistudio/TOTO_Grand_Prize_Toilet_Showcase-2_19d8d7d4.png",
      features: [
        "Bàn cầu một khối thiết kế liền khối sang trọng, đẳng cấp",
        "Nắp rửa điện tử WASHLET thông minh tích hợp công nghệ cao",
        "Hệ thống xả xoáy Tornado siêu mạnh, tiết kiệm nước tối đa",
        "Lớp men sứ CeFiONtect siêu mịn ngăn ngừa vết bẩn và vi khuẩn",
      ],
      isGrand: true,
    },
    {
      id: "first",
      rank: "GIẢI NHẤT",
      title: "Giải Nhất TOTO",
      name: "Nắp rửa điện tử TOTO",
      code: "TCF33461GAA#NW1",
      valueNumber: 17192000,
      valueDisplay: "17.192.000 VNĐ",
      image: "/assets/aistudio/TOTO_Washlet_Prize_Showcase-3_8c2cceb4.png",
      features: [
        "Nắp rửa điện tử TOTO WASHLET cao cấp Nhật Bản",
        "Đa chế độ phun rửa êm dịu, vòi tự động vệ sinh khử trùng",
        "Hệ thống sưởi ấm bệ ngồi và sấy khô bằng khí ấm",
        "Chế độ khử mùi tự động trước và sau khi sử dụng",
      ],
    },
    {
      id: "second",
      rank: "GIẢI NHÌ",
      title: "Giải Nhì TOTO",
      name: "Sen cây nhiệt độ TOTO",
      code: "TBW11440V/TBW09010",
      valueNumber: 13900000,
      valueDisplay: "13.900.000 VNĐ",
      image: "/assets/aistudio/Toto_Shower_Column_Prize_Poster-4_a2cf7071.png",
      features: [
        "Công nghệ ổn định nhiệt SMA giữ nhiệt độ nước luôn an toàn, chống bỏng",
        "Bát sen trần Aerial Shower công nghệ hòa trộn khí thư giãn tuyệt đối",
        "Lớp mạ Nickel-Chrome dày dặn sáng bóng bền bỉ cùng năm tháng",
        "Tay sen massage chuyển đổi chế độ nước linh hoạt",
      ],
    },
    {
      id: "third",
      rank: "GIẢI BA",
      title: "Giải Ba TOTO",
      name: "Chậu treo kèm vòi nóng lạnh TOTO",
      code: "LHT333C#XW/TLS103A0V",
      valueNumber: 4500000,
      valueDisplay: "4.500.000 VNĐ",
      image: "/assets/aistudio/TOTO_Basin_Faucet_Third_Prize_Poster-5_dd4442e5.png",
      features: [
        "Chậu rửa lavabo treo tường thanh thoát kèm chân lửng che ống xả gọn gàng",
        "Men sứ CeFiONtect chống bám ố vàng và dễ dàng vệ sinh",
        "Vòi chậu nóng lạnh đồng bộ đóng mở êm ái",
        "Van đĩa bằng sứ chống rò rỉ nước độ bền cao",
      ],
    },
    {
      id: "consolation",
      rank: "GIẢI KHUYẾN KHÍCH",
      title: "Giải Khuyến Khích TOTO",
      name: "Sen nóng lạnh kèm bát sen TOTO",
      code: "TBS103B0V/TBW09000V",
      valueNumber: 3300000,
      valueDisplay: "3.300.000 VNĐ",
      image: "/assets/aistudio/TOTO_Mixer_and_Handheld_Shower_Prize-6_748edc5f.png",
      features: [
        "Bộ sen tắm gạt nóng lạnh đồng thau mạ Chrome chuẩn chất lượng TOTO",
        "Bát sen cầm tay tạo dòng nước mịn màng, tiết kiệm nước",
        "Tay gạt hợp kim điều chỉnh lưu lượng và nhiệt độ chính xác",
        "Thiết kế tinh giản hiện đại phù hợp mọi không gian phòng tắm",
      ],
    },
  ],

  participationSteps: [
    {
      step: 1,
      title: "Mua sắm tại Showroom",
      description: "Đến Showroom TOTO Phú Cường tham quan và chọn mua các sản phẩm thiết bị vệ sinh TOTO hoặc sử dụng dịch vụ.",
    },
    {
      step: 2,
      title: "Nhận phiếu bốc thăm",
      description: "Nhân viên showroom lập hóa đơn và đối soát để trao số lượng phiếu bốc thăm hợp lệ (tối đa 03 phiếu/khách hàng).",
    },
    {
      step: 3,
      title: "Điền thông tin & giữ cuống",
      description: "Khách hàng điền đầy đủ họ tên, số điện thoại, thả phần phiếu vào hòm phiếu niêm phong và giữ lại cuống phiếu dự thưởng.",
    },
    {
      step: 4,
      title: "Đón chờ quay số trúng thưởng",
      description: "Tham dự buổi quay số công khai minh bạch tại Showroom TOTO Phú Cường và nhận các giải thưởng giá trị.",
    },
  ],

  showroomPhotos: [
    {
      id: "p1",
      image: "/assets/aistudio/Showroom_elegance_with_true-to-life_detail-6_20b32c9d.webp",
      title: "Toàn cảnh Showroom TOTO Phú Cường & bục trưng bày WASHLET New Standard",
      category: "showroom",
    },
    {
      id: "p2",
      image: "/assets/aistudio/Phu_Cuong_showroom_celebration_with_gift_basket_78f35b62.webp",
      title: "Khách hàng chúc mừng & trao quà tri ân tại Showroom Phú Cường",
      category: "customer",
    },
    {
      id: "p3",
      image: "/assets/aistudio/Inviting_TOTO_showroom_in_balanced_light_aa0e5b94.webp",
      title: "Khách hàng tham quan và trải nghiệm đông đúc tại Showroom TOTO Phú Cường",
      category: "customer",
    },
    {
      id: "p4",
      image: "/assets/aistudio/Refined_ceramic_showroom_in_natural_light-9_2bffcf87.webp",
      title: "Mặt tiền tòa nhà Siêu Thị Nội Thất Phú Cường - Showroom TOTO",
      category: "showroom",
    },
    {
      id: "p5",
      image: "/assets/aistudio/Polished_ceramic_showroom_interior-1_8fc435d1.webp",
      title: "Chuyên viên Phú Cường trực tiếp tư vấn tính năng nắp rửa điện tử WASHLET",
      category: "customer",
    },
    {
      id: "p6",
      image: "/assets/aistudio/Bright_TOTO_showroom_with_bathroom_fixtures-20_d47e85c3.webp",
      title: "Khách hàng trực tiếp trải nghiệm tay sen tắm nhiệt độ cao cấp",
      category: "customer",
    },
    {
      id: "p7",
      image: "/assets/aistudio/Phu_Cuong_sanitary_ware_team_portrait_55e8de96.webp",
      title: "Đội ngũ chuyên viên tư vấn tận tâm của Showroom Phú Cường",
      category: "customer",
    },
    {
      id: "p8",
      image: "/assets/aistudio/Polished_tile_showroom_display-10_756573cf.webp",
      title: "Bồn tắm nằm chân rồng mạ vàng nghệ thuật sang trọng",
      category: "showroom",
    },
    {
      id: "p9",
      image: "/assets/aistudio/Polished_ceramic_showroom_display-8_2fcf5632.webp",
      title: "Khu vực trưng bày lavabo màu nghệ thuật và sen vòi mạ màu cao cấp",
      category: "showroom",
    },
    {
      id: "p10",
      image: "/assets/aistudio/Refined_Ceramic_Showroom_Showcase-15_0ee4eff1.webp",
      title: "Bộ sưu tập sen vòi mạ màu Colour Fittings TOTO cao cấp",
      category: "showroom",
    },
    {
      id: "p11",
      image: "/assets/aistudio/Pristine_ceramic_showroom_display-12_c87f3454.webp",
      title: "Không gian trưng bày bồn cầu thông minh và bồn tắm TOTO",
      category: "showroom",
    },
    {
      id: "p12",
      image: "/assets/aistudio/Polished_ceramic_showroom_display-7_8ab7bb30.webp",
      title: "Bục tròn trưng bày các dòng bồn cầu TOTO hiện đại và sang trọng",
      category: "showroom",
    },
    {
      id: "p13",
      image: "/assets/aistudio/Elegant_ceramic_showroom_in_natural_light-11_596b5dec.webp",
      title: "Bàn cầu thông minh TOTO NEOREST đỉnh cao công nghệ vệ sinh Nhật Bản",
      category: "showroom",
    },
    {
      id: "p14",
      image: "/assets/aistudio/Pristine_ceramic_showroom_display-5_1067a555.webp",
      title: "Không gian trải nghiệm lavabo và sen tắm nhiệt độ TOTO",
      category: "showroom",
    },
    {
      id: "p15",
      image: "/assets/aistudio/Faithfully_retouched_ceramic_showroom-16_2b7c1316.webp",
      title: "Bàn chậu lavabo nghệ thuật đặt bàn TOTO tinh tế",
      category: "showroom",
    },
    {
      id: "p16",
      image: "/assets/aistudio/Polished_ceramic_showroom_display-13_4acaa294.webp",
      title: "Dãy bàn cầu điện tử NEOREST trên nền tiểu cảnh xanh tươi mát",
      category: "showroom",
    },
    {
      id: "p17",
      image: "/assets/aistudio/Polished_ceramic_showroom_in_natural_light-4_c6fe9506.webp",
      title: "Khu vực trải nghiệm thực tế bàn cầu thông minh NEOREST",
      category: "showroom",
    },
    {
      id: "p18",
      image: "/assets/aistudio/Polished_showroom_details__faithfully_preserved-18_032bd623.webp",
      title: "Phòng tắm mẫu hoàn thiện ốp đá cẩm thạch sang trọng",
      category: "showroom",
    },
    {
      id: "p19",
      image: "/assets/aistudio/Refined_ceramic_showroom_showcase-19_0b5b79c8.webp",
      title: "Khu vực sen tắm đen mờ cao cấp kết hợp bồn tắm nằm",
      category: "showroom",
    },
    {
      id: "p20",
      image: "/assets/aistudio/Refined_ceramic_showroom_product_display-14_957aa86b.webp",
      title: "Hệ thống bồn cầu treo tường & két nước âm tường TOTO gọn gàng",
      category: "showroom",
    },
    {
      id: "p21",
      image: "/assets/aistudio/Naturally_Enhanced_Showroom_Display-17_05dd98c5.webp",
      title: "Chậu rửa lavabo màu cam đất TOTO cao cấp phong cách đương đại",
      category: "showroom",
    },
    {
      id: "p22",
      image: "/assets/aistudio/Faithful_ceramic_showroom_retouch-3_df439579.webp",
      title: "Bộ sưu tập lavabo màu sắc nghệ thuật bốn mùa TOTO",
      category: "showroom",
    },
    {
      id: "p23",
      image: "/assets/aistudio/Modern_Ceramic_Showroom_Display-2_96d5657c.webp",
      title: "Không gian phòng tắm mẫu hoàn chỉnh bồn tắm nằm & sen vòi đẳng cấp",
      category: "showroom",
    },
    {
      id: "p24",
      image: "/assets/aistudio/TOTO_Shower_Display_Wall_d5f6104d.webp",
      title: "Bảng trải nghiệm công nghệ tia nước sen tắm TOTO (Comfort Wave, Warm Spa)",
      category: "showroom",
    },
    {
      id: "p25",
      image: "/assets/aistudio/TOTO_Phu_Cuong_showroom_interior-1_975c48ca.webp",
      title: "Không gian showroom & bảng vinh danh chứng nhận đại lý TOTO chính hãng",
      category: "showroom",
    },
    {
      id: "p26",
      image: "/assets/aistudio/Framed_2025_TOTO_Gold_Certificate_1bdeb4e8.webp",
      title: "Chứng nhận đại lý chính thức TOTO Việt Nam năm 2025",
      category: "certificate",
    },
    {
      id: "p27",
      image: "/assets/aistudio/Framed_2025_TOTO_Gold_Certificate-5_1bdeb4e8.webp",
      title: "Bảng chứng nhận mạ vàng Đại lý Ủy quyền chính thức TOTO năm 2025",
      category: "certificate",
    },
    {
      id: "p28",
      image: "/assets/aistudio/Framed_TOTO_certificate_with_gold_detailing-2_ba0b541f.webp",
      title: "Bảng vàng vinh danh Đại Lý Xuất Sắc TOTO Phú Cường",
      category: "certificate",
    },
    {
      id: "p29",
      image: "/assets/aistudio/Framed_TOTO_dealer_certificate-2_db07bd16.webp",
      title: "Chứng nhận đại lý chính thức TOTO Phú Cường",
      category: "certificate",
    },
    {
      id: "p30",
      image: "/assets/aistudio/Framed_TOTO_certificate_photograph-1_6a2a44ea.webp",
      title: "Chứng nhận đại lý TOTO chính thức năm 2024",
      category: "certificate",
    },
    {
      id: "p31",
      image: "/assets/aistudio/Framed_TOTO_Certificate__Faithfully_Retouched-4_0120ebe0.webp",
      title: "Chứng nhận thành tích đại lý xuất sắc TOTO Phú Cường",
      category: "certificate",
    },
    {
      id: "p32",
      image: "/assets/aistudio/Framed_TOTO_certificate_photograph-3_ea4cf8e9.webp",
      title: "Giấy chứng nhận đại lý TOTO Phú Cường qua các năm phát triển",
      category: "certificate",
    },
  ],

  faqs: [
    {
      question: "Thời gian diễn ra chương trình tri ân là khi nào?",
      answer: "Chương trình được áp dụng chính thức từ ngày 01/11/2026 đến hết ngày 19/12/2026 đối với các đơn hàng và dịch vụ tại Showroom TOTO Phú Cường.",
    },
    {
      question: "Làm thế nào để nhận được phiếu bốc thăm?",
      answer: "Khách hàng nhận được 01 phiếu bốc thăm cho mỗi 30 triệu đồng giá trị đơn hàng, HOẶC khi mua đơn hàng có ít nhất 01 nắp rửa điện tử WASHLET, bàn cầu điện tử hoặc bàn cầu NEOREST TOTO. Đơn hàng trên 100 triệu đồng được tặng thêm 01 phiếu. Tối đa mỗi khách hàng nhận 03 phiếu trong suốt chương trình.",
    },
    {
      question: "Giải thưởng có được quy đổi thành tiền mặt không?",
      answer: "Các giải thưởng là hiện vật chính hãng TOTO mới 100% kèm đầy đủ phiếu bảo hành chính hãng, không được quy đổi thành tiền mặt theo thể lệ của ban tổ chức.",
    },
    {
      question: "Nếu tôi ở xa thì liên hệ tư vấn như thế nào?",
      answer: "Quý khách vui lòng gọi ngay hotline 0912 056 534 để được đội ngũ chuyên viên Showroom TOTO Phú Cường hỗ trợ giải đáp chi tiết mọi thông tin về sản phẩm và chương trình.",
    },
  ],

  rulesModal: {
    title: "THỂ LỆ CHƯƠNG TRÌNH BỐC THĂM TRÚNG THƯỞNG",
    sections: [
      {
        heading: "1. Tên chương trình & Đơn vị tổ chức",
        points: [
          "Tên chương trình: TRI ÂN KHÁCH HÀNG – BỐC THĂM TRÚNG THƯỞNG",
          "Đơn vị tổ chức: SHOWROOM TOTO PHÚ CƯỜNG",
          "Địa điểm tổ chức: Siêu Thị Nội Thất Phú Cường - 748 Nguyễn Văn Linh, phường Phố Hiến, Hưng Yên",
          "Phạm vi áp dụng: Khách hàng mua sắm hàng hóa hoặc sử dụng dịch vụ tại Showroom TOTO Phú Cường (Siêu Thị Nội Thất Phú Cường, 748 Nguyễn Văn Linh, phường Phố Hiến, Hưng Yên).",
        ],
      },
      {
        heading: "2. Thời gian áp dụng",
        points: [
          "Thời gian phát hành phiếu: Từ ngày 01/11/2026 đến hết ngày 19/12/2026 (múi giờ Asia/Ho_Chi_Minh).",
          "Thời gian bốc thăm: Được công bố cụ thể và tổ chức công khai tại Showroom TOTO Phú Cường (Siêu Thị Nội Thất Phú Cường, 748 Nguyễn Văn Linh, phường Phố Hiến, Hưng Yên) sau khi kết thúc thời gian phát hành phiếu.",
        ],
      },
      {
        heading: "3. Điều kiện nhận phiếu bốc thăm",
        points: [
          "Mỗi 30 triệu đồng doanh số mua hàng/dịch vụ: nhận 01 phiếu bốc thăm.",
          "HOẶC đơn hàng có ít nhất 01 nắp rửa điện tử WASHLET, bàn cầu điện tử hoặc bàn cầu NEOREST: nhận 01 phiếu.",
          "Đơn hàng đạt giá trị trên 100 triệu đồng: tặng thêm 01 phiếu may mắn.",
          "Mỗi khách hàng được nhận tối đa 03 phiếu bốc thăm trong suốt toàn bộ chương trình.",
        ],
      },
      {
        heading: "4. Cơ cấu giải thưởng chính thức",
        points: [
          "Giải Đặc Biệt (01 giải): Bàn cầu TOTO một khối kèm nắp rửa điện tử MS889CDRW25#XW - Trị giá 34.354.000 VNĐ",
          "Giải Nhất (01 giải): Nắp rửa điện tử TOTO TCF33461GAA#NW1 - Trị giá 17.192.000 VNĐ",
          "Giải Nhì (01 giải): Sen cây nhiệt độ TOTO TBW11440V/TBW09010 - Trị giá 13.900.000 VNĐ",
          "Giải Ba (01 giải): Chậu treo kèm vòi nóng lạnh TOTO LHT333C#XW/TLS103A0V - Trị giá 4.500.000 VNĐ",
          "Tổng giá trị giải thưởng và quà tặng tri ân lên đến 80.000.000 VNĐ. Bên cạnh các giải bốc thăm, Phú Cường còn dành tặng quà tri ân cho khách hàng theo điều kiện của chương trình. Giải thưởng không quy đổi thành tiền mặt.",
        ],
      },
      {
        heading: "5. Quy định về phiếu trúng thưởng và nhận giải",
        points: [
          "Phiếu trúng thưởng hợp lệ là phiếu do Showroom TOTO Phú Cường phát hành, còn nguyên vẹn, không rách rời, chắp vá hay tẩy xóa, có đóng dấu đối soát và trùng khớp với cuống phiếu lưu tại hòm phiếu.",
          "Người nhận giải cần xuất trình CMND/CCCD, cuống phiếu trúng thưởng hợp lệ và hóa đơn mua hàng liên quan.",
          "Mọi thắc mắc và khiếu nại, quyết định của Ban tổ chức Showroom TOTO Phú Cường là quyết định cuối cùng.",
        ],
      },
    ],
  },
};
