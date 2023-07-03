import CreateEmployeeForm from '../../components/Form/CreateEmployeeForm';
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900'>Create Employee</h2>
            <CreateEmployeeForm />
        </div>
    );
}