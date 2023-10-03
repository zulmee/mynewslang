

export default function handler(req,res){
    res.status(200).json({name:'john'})
}

export async function POST(request) {
    try {
  
      console.log(request.method)
  
      return NextResponse.json(user);
    } catch (error) {
      return NextResponse.json(errorHandler(error), {status: 400});
    }
  }