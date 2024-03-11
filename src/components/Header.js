import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container lg:mx-auto">
            <div className="flex flex-row">
               <div className="w-1/4 bg-red-200">
                    <div className='flex p-3'>
                        <p className='title_style1 mr-3'>SiS</p>
                        <p className='title_style2'>Svensks Institutet for standarder</p>
                    </div>
                    
               </div>
               <div className="w-3/4 bg-gray-400">
                <div className='flex flex-row-reverse pb-5'>             
                    <Link className="nav-link p-2" to={'/sign-in'}>
                    Login
                    </Link>            
                    <Link className="nav-link p-2" to={'/sign-up'}>
                    Sign up
                    </Link>           
                </div>
                <div className='flex flex-row-reverse'>
                    <div className="btn btn-primary  mx-2"><Link to={'/'}>PM</Link></div>
                    <div className="btn btn-primary  mx-2"><Link to={'/'}>SIS</Link></div>
                </div>
               </div>
            </div>

            <div className="flex w-3/4 float-right justify-around">
                    <div className="btn">Test Cases</div>
                    <div className="btn">Test Data</div>
                    <div className="btn">Reports</div>
                </div>
            
        </div>
    )
}

export default Header;