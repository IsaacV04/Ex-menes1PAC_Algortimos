alert('Bienvenido al emulador de una Plantilla Salarial\n\nPrecione aceptar para continuar')

const planilla = {
    numero: '',
    nombreEmpresa: '',
    empleados: {
        nombreEmpleado: '',
        sueldoBase: '',
        adelanto: '',
        prestamo: ''
    }
}

planilla.numero = prompt('Ingrese el numero de planila: ');
console.log(`Numero de plannilla: ${planilla.numero}`);
planilla.nombreEmpresa = prompt('Ingrese el nombre de la empresa:');
console.log(`Nombre de la empresa: ${planilla.nombreEmpresa}`);

planilla.empleados.nombreEmpleado = prompt('Ingrese el nombre del empleado:');
console.log(`Nombre de la empresa: ${planilla.empleados.nombreEmpleado}`);
planilla.empleados.sueldoBase = parseFloat(prompt('Ingrese el sueldo base del empleado:'));
console.log(`Sueldo Base del empleado: ${planilla.empleados.sueldoBase}`);
planilla.empleados.adelanto = parseFloat(prompt('Ingrese el adelanto: '));
console.log(`Adelanto de salario: ${planilla.empleados.adelanto}`);
planilla.empleados.prestamo = parseFloat(prompt('Ingrese el prestamo: '));
console.log(`Prestamo del empleado: ${planilla.empleados.prestamo}`);

const IHSS = planilla.empleados.sueldoBase * 0.035;
console.log(`IHSS: ${IHSS}`);

const INFOP = planilla.empleados.sueldoBase * 0.015;
console.log(`INFOP: ${INFOP}`);

const totalPagar = planilla.empleados.sueldoBase - (planilla.empleados.adelanto + planilla.empleados.prestamo + IHSS + INFOP);
console.log(`Total a Pagar: ${totalPagar}`);
