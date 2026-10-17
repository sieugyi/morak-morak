import {NextResponse} from 'next/server';
export async function POST(request:Request){
 const {plant,question}=await request.json().catch(()=>({}));
 if(typeof plant!=='string'||typeof question!=='string'||question.length>500)return NextResponse.json({error:'올바른 질문을 입력해주세요.'},{status:400});
 const key=process.env.OPENAI_API_KEY;
 if(!key)return NextResponse.json({answer:'🌱 데모 도우미예요! 흙의 촉촉함과 식물의 잎 상태를 먼저 살펴보세요. 물주기나 햇빛은 식물마다 달라요. AI 연결은 .env.local 설정 후 활성화할 수 있어요.'});
 try{
 const r=await fetch('https://api.openai.com/v1/responses',{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${key}`},body:JSON.stringify({model:'gpt-4.1-mini',input:[{role:'system',content:'당신은 한국어로 답하는 다정한 초보 식물 재배 도우미입니다. 과도한 물주기를 권하지 마세요. 사진이나 환경 정보가 없으면 진단을 확신하지 말고 짧게 추가 정보를 물으세요. 답변은 3문장 이내로.'},{role:'user',content:`식물: ${plant}\n질문: ${question}`}],max_output_tokens:230})});
 if(!r.ok)throw new Error('upstream');const d=await r.json();const answer=(d.output||[]).flatMap((x:{content?:{text?:string}[]})=>x.content||[]).map((x:{text?:string})=>x.text||'').join('').trim();return NextResponse.json({answer:answer||'지금은 답변을 만들지 못했어요.'});
 }catch{return NextResponse.json({error:'AI 도우미가 잠시 쉬고 있어요.'},{status:503})}
}
