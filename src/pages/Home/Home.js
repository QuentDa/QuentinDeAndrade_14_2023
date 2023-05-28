import CreateEmployeeForm from '../../components/Form/CreateEmployeeForm';
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <h2>Create Employee</h2>
            <CreateEmployeeForm />
        </div>
    );
}