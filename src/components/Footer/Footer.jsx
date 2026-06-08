import insta from '../../assets/instagram.png'
import fb from '../../assets/facebook.png'
import x from '../../assets/twitter.png'



const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center  bg-[#244D3F] text-base-content rounded p-10">
           <div className="w-10/12 mx-auto">
             <h2 className='font-bold text-4xl text-white'>KeenKeeper</h2>
            <p className='font-semibold text-white mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
           </div>

            <nav>
                <p className='mb-4 font-semibold text-xl text-white'>Social Links</p>
                <div className="grid grid-flow-col gap-4">
                    
                    <a>
                       <img src={insta} alt="Instagram" className=" hover:opacity-80 transition-opacity" />
                    </a>
                    <a>
                     <img src={fb} alt="Instagram" className=" hover:opacity-80 transition-opacity" />  
                    </a>
                    <a>
                      <img src={x} alt="Instagram" className=" hover:opacity-80 transition-opacity" />  
                    </a>
                </div>
            </nav>
            <div className='flex justify-between text-white w-10/12 mx-auto'>
                <p>Copyright © 2026 KeenKeeper. All rights reserved.</p>

                <ul className="flex gap-4">
                    <li><a className="link link-hover">Terms of Service</a></li>
                    <li><a className="link link-hover">Privacy Policy</a></li>
                    <li><a className="link link-hover">Cookies</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;