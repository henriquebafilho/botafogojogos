export const slugify = (str) => str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const findBySlug = (nomes, slug) => nomes.find(n => slugify(n) === slug);
