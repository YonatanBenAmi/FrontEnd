import { SiteClient } from 'datocms-client';

const client = new SiteClient(import.meta.env.VITE_TOKEN);

export async function getTeamMembers() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'member',
            },
        });

        const teamMembers = [];
        for (let item of items) {
            let imageData = await getImageData(item.picture?.uploadId);
            teamMembers.push({
                picture: imageData?.url,
                name: item.name,
                jtitle: item.jtitle,
                group: determineGroup(item),
            });
        };

        console.log('Team Members:', teamMembers);
        return teamMembers;
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

function determineGroup(memberItem) {

    if (memberItem.department.includes('Manager')) {
        return 'managers';
    } else if (memberItem.department.includes('Mentors')) {
        return 'mentors';
    } else if (memberItem.department.includes('Marketing')) {
        return 'marketing';
    }
}





