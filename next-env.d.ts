export type Plant = { id:string; name:string; type:'텃밭'|'관상'; icon:string; color:string; difficulty:number; sunlight:number; room:boolean; stages:string[]; tagline:string; description:string; kit:string[]; };
export const plants:Plant[] = [
{id:'basil',name:'바질',type:'텃밭',icon:'🌿',color:'#b8d9a9',difficulty:1,sunlight:3,room:true,stages:['씨앗','발아','본잎','무성한 잎','수확'],tagline:'창가에서 향긋하게 자라는 친구',description:'햇빛이 잘 드는 창가에서 키우기 좋은 향기로운 허브예요.',kit:['바질 씨앗','화분과 받침','배양토','이름표','재배 안내서']},
{id:'tomato',name:'방울토마토',type:'텃밭',icon:'🍅',color:'#f5bba9',difficulty:3,sunlight:4,room:false,stages:['씨앗','발아','잎 성장','꽃','열매','수확'],tagline:'빨간 열매를 기다리는 작은 모험',description:'햇빛과 충분한 공간, 지지대가 필요한 열매 식물이에요.',kit:['방울토마토 씨앗','깊은 재배 용기','배양토','지지대','재배 안내서']},
{id:'marigold',name:'메리골드',type:'관상',icon:'🌼',color:'#f4d993',difficulty:2,sunlight:4,room:false,stages:['씨앗','발아','본잎','꽃봉오리','개화'],tagline:'햇살을 닮은 노란 꽃',description:'빛이 충분한 공간에서 화사한 꽃을 만날 수 있어요.',kit:['메리골드 씨앗','화분과 받침','배양토','이름표','재배 안내서']},
{id:'spider',name:'접란',type:'관상',icon:'🪴',color:'#c4d7c5',difficulty:1,sunlight:2,room:true,stages:['어린 포기','뿌리 활착','새잎','풍성한 잎','새끼 포기'],tagline:'포근한 실내를 좋아하는 초록 친구',description:'직사광선이 강하지 않은 밝은 실내에서 키우기 좋은 관엽식물이에요.',kit:['접란 어린 포기','화분과 받침','배양토','이름표','재배 안내서']},
{id:'lettuce',name:'상추',type:'텃밭',icon:'🥬',color:'#c8e0a6',difficulty:1,sunlight:3,room:true,stages:['씨앗','발아','본잎','잎 성장','수확'],tagline:'매일 조금씩 자라는 초록 식탁',description:'충분히 밝고 서늘한 곳에서 잎을 관찰하며 수확해요.',kit:['상추 씨앗','재배 용기','배양토','이름표','재배 안내서']},
{id:'pansy',name:'팬지',type:'관상',icon:'🌸',color:'#d9c6e8',difficulty:2,sunlight:3,room:false,stages:['모종','뿌리 활착','새잎','꽃봉오리','개화'],tagline:'조용히 피어나는 알록달록한 하루',description:'선선한 날씨를 좋아하고 꽃 색깔이 다채로운 친구예요.',kit:['팬지 모종','화분과 받침','배양토','이름표','재배 안내서']}
];
export type Answers={purpose:'관상'|'텃밭'|'모두';light:number;space:'실내'|'베란다';effort:number};
export function recommend(a:Answers){return [...plants].map(p=>({p,score:(a.purpose==='모두'||p.type===a.purpose?5:0) + (4-Math.abs(p.sunlight-a.light)) + (p.room||a.space==='베란다'?2:0) + (4-Math.abs(p.difficulty-a.effort))})).sort((a,b)=>b.score-a.score).map(x=>x.p)}
