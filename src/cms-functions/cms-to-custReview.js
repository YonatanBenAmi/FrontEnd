import { SiteClient } from 'datocms-client';

const client = new SiteClient(import.meta.env.VITE_TOKEN);

export async function getCustomerReviews() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'customer',
            },
        });

        const customerReviews = [];
        for (let item of items) {
            let imageData = await getImageData(item.picture?.uploadId);
            customerReviews.push({
                picture: imageData?.url,
                name: item.name,
                job: item.job,
                shdescription: item.shdescription,
            });
        }
        console.log('Customers Reviews:', customerReviews);
        return customerReviews;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getImageData(uploadId) {
    try {
        const imageData = await client.uploads.find(uploadId);
        if (imageData && imageData.url) {
            return await imageData;
        }

    } catch (error) {
        console.log('error', error);
    }
}

