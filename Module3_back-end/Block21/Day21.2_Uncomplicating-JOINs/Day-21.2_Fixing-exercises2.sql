# exercise 1
SELECT employee.FIRST_NAME, manager.FIRST_NAME
FROM hr.employees AS employee
INNER JOIN hr.employees AS manager
ON employee.MANAGER_ID = manager.EMPLOYEE_ID
WHERE employee.DEPARTMENT_ID <> manager.DEPARTMENT_ID;

# exercise 2
SELECT manager.FIRST_NAME, COUNT(*)
FROM hr.employees AS manager
INNER JOIN hr.employees AS sub
ON sub.MANAGER_ID = manager.EMPLOYEE_ID
GROUP BY manager.MANAGER_ID;