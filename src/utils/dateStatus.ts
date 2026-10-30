export type CampaignStatus = 'UPCOMING' | 'ONGOING' | 'ENDED';

export interface CampaignStatusInfo {
  status: CampaignStatus;
  label: string;
  badgeClass: string;
  canParticipate: boolean;
  statusNote: string;
}

export function getCampaignStatus(startDateStr: string, endDateStr: string): CampaignStatusInfo {
  const now = new Date();
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  if (now < start) {
    return {
      status: 'UPCOMING',
      label: 'Sắp diễn ra',
      badgeClass: 'bg-[#C5A36A]/20 text-[#8B6E38] border border-[#C5A36A]/40',
      canParticipate: true,
      statusNote: 'Chương trình sẽ chính thức bắt đầu từ ngày 01/11/2026. Quý khách có thể ghé thăm showroom để trải nghiệm sản phẩm trước.',
    };
  }

  if (now > end) {
    return {
      status: 'ENDED',
      label: 'Chương trình đã kết thúc',
      badgeClass: 'bg-neutral-200 text-neutral-600 border border-neutral-300',
      canParticipate: false,
      statusNote: 'Thời hạn nhận phiếu chương trình đã khép lại. Showroom TOTO Phú Cường chân thành cảm ơn sự đồng hành của Quý khách.',
    };
  }

  return {
    status: 'ONGOING',
    label: 'Đang diễn ra',
    badgeClass: 'bg-[#800F21] text-white border border-[#C5A36A]/50 shadow-sm',
    canParticipate: true,
    statusNote: 'Chương trình đang áp dụng cho mọi khách hàng mua sắm tại Showroom TOTO Phú Cường đến hết 19/12/2026.',
  };
}
