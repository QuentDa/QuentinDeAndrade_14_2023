import CreateEmployeeForm from '../../components/Form/CreateEmployeeForm';
import './Home.css'

export default function Home() {
    return (
        <div className="home xl:w-1/2 flex flex-col items-center justify-center mx-auto">
            <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900'>Create Employee</h2>
            <CreateEmployeeForm />
        </div>
    );
}