import acronyms from '$lib/assets/acronyms.json'

export async function GET() {
    return new Response(
        JSON.stringify(acronyms.content),
        {status: 200, headers: {'Content-Type': 'application/json'}}
    );
}