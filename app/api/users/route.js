export async function GET() {
    console.log("요청옴");
    try {
      const userinfo = [{ id:'jamie' }]
      return NextResponse.json(userinfo);
    } catch (error) {
      return NextResponse.json(errorHandler(error), {status: 400});
    }
  }