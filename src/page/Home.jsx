import { useNavigate } from "react-router-dom";


const Home = () => {
    const data = [
        {
            title : "Zebb-Digital Agency",
            img : "/public/assets/Zebb-Digital-Agency.png",
            url : '/zebb-digital-agency'
        },
        {
            title : "Positivirus",
            img : "/public/assets/positivirus.png",
            url : '/positivirus'
        },
        
    ]
    const navigate = useNavigate();

    return ( 
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-screen-lg px-10 py-5 mx-auto">
                {data.map((v,i)=>(
                    <div key={i} className="border border-slate-400 rounded-md cursor-pointer" onClick={()=>navigate(v.url)}>
                        <img src={v.img} alt="cover" className="w-[300px] mb-3"/>
                        <h2 className="text-center">{v.title}</h2>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Home;