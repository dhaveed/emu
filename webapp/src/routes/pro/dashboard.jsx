// @material-ui/icons
import ContentPaste from '@material-ui/icons/ContentPaste';

import Employees from '../../views/Employees/List';
import EditEmployee from '../../views/Employees/Edit';
import MonthlyAttendance from '../../views/Employees/MonthlyAttendance';

const dashRoutes = [
  {
    collapse: true,
    path: '/empleados',
    name: 'Empleados',
    state: 'openEmpleados',
    icon: ContentPaste,
    views: [
      {
        path: '/empleados/lista',
        name: 'Lista de Empleados',
        mini: 'LE',
        component: Employees,
      },
      {
        path: '/empleados/editar',
        name: 'Agregar Empleado',
        mini: 'AE',
        component: EditEmployee,
      },
      {
        path: '/empleados/asistencia-mensual',
        name: 'Asistencia Mensual',
        mini: 'AM',
        component: MonthlyAttendance,
      },
    ],
  },
  {
    redirect: true, path: '/', pathTo: '/empleados/lista', name: 'Empleados',
  },
];
export default dashRoutes;
