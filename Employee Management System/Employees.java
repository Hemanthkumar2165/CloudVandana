import java.util.ArrayList;
import java.util.List;

class Employee {
    int id;
    String name;
    double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("--------------------------");
    }
}

public class Employees {
    public static void main(String[] args) {
        
        Employee employee1 = new Employee(101, "Hemanth", 60000);
        Employee employee2 = new Employee(201, "Rani", 56000);
        Employee employee3 = new Employee(323, "Raja", 78000);

        List<Employee> employees = new ArrayList<>();
        employees.add(employee1);
        employees.add(employee2);
        employees.add(employee3);

        for (Employee employee : employees) {
            employee.displayDetails();
        }
    }
}
