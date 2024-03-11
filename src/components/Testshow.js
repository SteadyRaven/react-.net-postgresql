import { useContext } from 'react';
import { TestContext } from '../App';

const Testshow = () => {

    const {testcase, setTestCase} = useContext(TestContext);

    return (
        <div>
            <div className='flex mb-4'>
                <p className='w-5/6 text-center text-primary' style={{fontSize: 40}}>
                    {testcase}
                </p>
                <p className='w-1/6 btn text-danger' style={{fontSize: 20}}>TestRun</p>
            </div>
            
            <div className='mb-4'>
                <table id="customers">
                    <tr>
                        <th>Username</th>
                        <th>Testcase</th>
                        <th>Results</th>
                    </tr>
                    <tr>
                        <td>Kristian</td>
                        <td>aa</td>
                        <td>bb</td>
                    </tr>
                    <tr>
                        <td>Tomas</td>
                        <td>bb</td>
                        <td>cc</td>
                    </tr>
                    <tr>
                        <td>Brantley</td>
                        <td>cc</td>
                        <td>dd</td>
                    </tr>
                    <tr>
                        <td>Alex</td>
                        <td>dd</td>
                        <td>ff</td>
                    </tr>
                    
                </table>
            </div>

           <div>
            <p>Command window</p>
            <div className='bg-dark w-5/6' style={{height:200}}></div>
           </div> 
        </div>
    )
}

export default Testshow;