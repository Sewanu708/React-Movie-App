import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
function Welcome() {
    const navigate = useNavigate();
    console.log('Hell');
    
    return <Fragment>
        <section className="min-h-screen min-w-[100vw] bg-[url('/public\freepik__candid-image-photography-natural-textures-highly-r__79591.jpeg')] bg-no-repeat bg-cover  bg-transparent">
            <div className="min-h-[100vh] min-w-[100vw] absolute bg-gradient-to-b from-[#191817] from-49%  to-[#6100C2] opacity-95 flex flex-col justify-center items-center ">

                <div className="w-[225px]  text-white text-center">
                    <div className="w-full flex flex-col items-center gap-y-4 mb-[40px]">
                         <img src="public\logo.svg" className="w-[132px] h-[32px]"/>
                         <p className="text-lg">Enjoy the newest movies</p>
                    </div>

                    <div className="w-full mb-4">
                        <button className="w-full bg-[#6100C2] rounded-lg p-2" onClick={()=>{
                            navigate('/Login')
                        }}>Log in</button>
                    </div>

                    <div>
                        <span>No account? <Link to={'/Signup'}>Sign up</Link></span>
                    </div>

                    
                </div>

            </div>
            
        </section>
    </Fragment>
}

export default Welcome