import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.Scanner;

public class Entrada {
    // Mapa para almacenar usuarios y contraseñas
    private static Map<String, String> usuarios = new HashMap<>();

    // Lista para almacenar información de paquetes
    private static List<Paquete> paquetes = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("------------------------------");
        System.out.println("|    BIENVENIDO A ENVIENTLY  |");
        System.out.println("------------------------------");

        while (true) {
            // Menú de opciones
            System.out.println("1. Registrarse");
            System.out.println("2. Iniciar sesión");
            System.out.println("3. Salir");
            System.out.print("Selecciona una opción: ");

            int opcion = scanner.nextInt();
            scanner.nextLine();

            // Switch para elegir las diferentes opciones del menú
            switch (opcion) {
                case 1:
                    // Opción para registrar un nuevo usuario
                    registrarUsuario(scanner);
                    break;
                case 2:
                    // Opción para iniciar sesión y gestionar paquetes
                    if (iniciarSesion(scanner)) {
                        gestionarPaquetes(scanner);
                    }
                    break;
                case 3:
                    // Opción para salir del programa
                    System.out.println("¡Adiós!");
                    System.exit(0);
                default:
                    // Mensaje para opciones no válidas
                    System.out.println("Opción no válida. Inténtalo de nuevo.");
            }
        }
    }

    // Método para registrar un nuevo usuario
    private static void registrarUsuario(Scanner scanner) {
        System.out.print("Ingresa tu nombre de usuario: ");
        String nombreUsuario = scanner.nextLine();

        // Verificación del nombre de usuario por si ya está en uso
        if (usuarios.containsKey(nombreUsuario)) {
            System.out.println("El nombre de usuario ya está en uso. Inténtalo de nuevo.");
            return;
        }

        System.out.print("Ingresa tu contraseña: ");
        String contrasena = scanner.nextLine();

        // Almacenar el nuevo usuario y contraseña
        usuarios.put(nombreUsuario, contrasena);
        System.out.println("Usuario registrado exitosamente.");
    }

    // Método para iniciar sesión
    private static boolean iniciarSesion(Scanner scanner) {
        System.out.print("Ingresa tu nombre de usuario: ");
        String nombreUsuario = scanner.nextLine();

        System.out.print("Ingresa tu contraseña: ");
        String contrasena = scanner.nextLine();

        // Verificación de que el nombre de usuario y la contraseña sean correctos
        if (usuarios.containsKey(nombreUsuario) && usuarios.get(nombreUsuario).equals(contrasena)) {
            System.out.println("Inicio de sesión exitoso. ¡Bienvenido!");
            return true;
        } else {
            // Mensaje de error para datos de inicio de sesión incorrectos
            System.out.println("Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.");
            return false;
        }
    }

    // Método para gestionar paquetes después de iniciar sesión
    private static void gestionarPaquetes(Scanner scanner) {
        // Bucle para mostrar opciones de gestión de paquetes
        while (true) {
            System.out.println("1. Buscar paquete");
            System.out.println("2. Enviar paquete");
            System.out.println("3. Volver al menú principal");
            System.out.print("Selecciona una opción: ");

            int opcion = scanner.nextInt();
            scanner.nextLine();

            // Switch para elegir las opciones de gestión de paquetes
            switch (opcion) {
                case 1:
                    // Opción para buscar paquetes existentes
                    buscarPaquetes();
                    break;
                case 2:
                    // Opción para enviar un nuevo paquete
                    enviarPaquete(scanner);
                    break;
                case 3:
                    // Opción para volver al menú principal
                    return;
                default:
                    // Mensaje para opciones no válidas
                    System.out.println("Opción no válida. Inténtalo de nuevo.");
            }
        }
    }

    // Método para mostrar la lista de paquetes existentes
    private static void buscarPaquetes() {
        System.out.println("Lista de paquetes disponibles:");
        for (Paquete paquete : paquetes) {
            System.out.println("Ubicación: " + paquete.getUbicacion() +
                    ", Precio: " + paquete.getPrecio() +
                    ", Peso: " + paquete.getPeso());
        }
    }

    // Método para enviar un nuevo paquete
    private static void enviarPaquete(Scanner scanner) {
        System.out.print("Ingresa la ubicación del paquete: ");
        String ubicacion = scanner.nextLine();

        System.out.print("Ingresa el precio del paquete: ");
        double precio = scanner.nextDouble();

        System.out.print("Ingresa el peso del paquete: ");
        double peso = scanner.nextDouble();

        // Crear un nuevo paquete y agregarlo a la lista
        Paquete nuevoPaquete = new Paquete(ubicacion, precio, peso);
        paquetes.add(nuevoPaquete);

        System.out.println("Paquete enviado correctamente.");
    }
}

// Clase que representa un paquete con datos de ubicación, precio y peso
class Paquete {
    private String ubicacion;
    private double precio;
    private double peso;

    // Constructor para inicializar un paquete
    public Paquete(String ubicacion, double precio, double peso) {
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.peso = peso;
    }

    // Métodos para obtener la ubicación, precio y peso del paquete
    public String getUbicacion() {
        return ubicacion;
    }

    public double getPrecio() {
        return precio;
    }

    public double getPeso() {
        return peso;
    }
}
