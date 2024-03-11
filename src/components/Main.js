import Rside from './Rside';
import Testshow from './Testshow';

const Main = () => {



    return (
        <div className="container lg:mx-auto pt-5">
            <div className='flex flex-warp'>
                <div className='w-1/4'>
                    <Rside></Rside>
                </div>
                <div className='w-3/4'>
                    <Testshow></Testshow>
                </div> 
            </div>       
        </div>
    )
}

export default Main;