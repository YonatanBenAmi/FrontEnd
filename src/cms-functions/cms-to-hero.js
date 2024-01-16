import { SiteClient } from 'datocms-client';
const client = new SiteClient(import.meta.env.VITE_TOKEN);

export async function getHeroSection(pageName) {
    try {
        const heroSections = await client.items.all({
            'filter[type]': 'hero_section',
            'filter[fields][title][eq]': pageName,
        });

        if (heroSections.length > 0) {
            const items = heroSections[0];
            return {
                title: items.title,
                desc1: items.desc1,
                desc2: items.desc2,
                desc3: items.desc3,
                desc4: items.desc4,
                button: items.button,
            };
        } else {
            console.error(`No hero section found for page:  ${pageName}`);
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
