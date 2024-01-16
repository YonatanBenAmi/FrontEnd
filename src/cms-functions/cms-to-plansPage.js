import { SiteClient } from 'datocms-client';

const client = new SiteClient(import.meta.env.VITE_TOKEN);

export async function getPlansPage(titleName) {
    try {
        const queryFilter = {
            filter: {
                type: 'plans_page',
            }
        };
        
        if (titleName) {
            queryFilter.filter.fields = {
                title: {
                    titleName
                }
            };
        }

        const items = await client.items.all(queryFilter);

        console.log(items);
        return items;
    } catch (error) {
        console.error('Error:', error);
    }
}

