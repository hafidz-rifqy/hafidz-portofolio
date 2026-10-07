// Static data wrapper for free-hosting compatibility.

const DATA_URL = '/data/site.json';

let cachedData = null;

async function getData() {
  if (cachedData) return cachedData;

  const response = await fetch(DATA_URL);
  if (!response.ok) {
    throw new Error('Gagal memuat data portfolio');
  }

  cachedData = await response.json();
  return cachedData;
}

export const api = {
  getProfile: async () => {
    const data = await getData();
    return data.profile || {};
  },
  getPortfolio: async (category) => {
    const data = await getData();
    const items = data.portfolio || [];
    return category ? items.filter((item) => item.category === category) : items;
  },
  getExperience: async () => {
    const data = await getData();
    return data.experience || [];
  },
  getSocial: async () => {
    const data = await getData();
    return data.social || [];
  },
  getComments: async () => {
    const data = await getData();
    return data.comments || [];
  },
  postComment: async () => ({
    success: true,
    message: 'Versi static: komentar hanya demo di browser ini.',
  }),
  postContact: async () => ({
    success: true,
    message: 'Versi static: kontak siap dihubungkan ke Formspree / EmailJS.',
  }),
};
