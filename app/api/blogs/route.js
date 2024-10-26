import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {

    const blogs = [
        {
            id: 1,
            description: 'Test blog 1',
            slug: 'abc-123-1'
        },
        {
            id: 2,
            description: 'Test blog 2',
            slug: 'abc-123-2'
        },
        {
            id: 3,
            description: 'Test blog 3',
            slug: 'abc-123-3'
        },
        {
            id: 4,
            description: 'Test blog 4',
            slug: 'abc-123-4'
        },
        {
            id: 5,
            description: 'Test blog 5',
            slug: 'abc-123-5'
        },
    ]

    return new Response(JSON.stringify(blogs), {
        status: 201
    });
}