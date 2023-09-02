import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Allocations from './pages/Allocation';
import Courses from './pages/Course';
import DepartamentForm from './pages/Departament/Form';
import Departaments from './pages/Departament';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProfessorForm from './pages/Professor/Form';
import Professors from './pages/Professor';
import CourseForm from './pages/Course/Form';

function ProfessorAllocationRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Allocations />} path='/allocation' />
        <Route path='/course'>
          <Route element={<Courses />} index />
          <Route element={<CourseForm />} path='create' />
          <Route element={<CourseForm />} path=':id/update' />
        </Route>
        <Route path='/departament'>
          <Route element={<Departaments />} index />
          <Route element={<DepartamentForm />} path='create' />
          <Route element={<DepartamentForm />} path=':id/update' />
        </Route>
        <Route path='/professor'>
          <Route element={<Professors />} index />
          <Route element={<ProfessorForm />} path='create' />
          <Route element={<ProfessorForm />} path=':id/update' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default ProfessorAllocationRouter;
