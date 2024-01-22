import {NextResponse} from 'next/server'
import {NextRequest} from 'next/server'

export async function middleware(request: NextRequest): Promise<NextResponse> {
	console.log(request.nextUrl)
	return NextResponse.next()
}
