export interface Table {
    id: string;
    createdAt?: string,
    updatedAt?: string,
}

export interface Employee extends Table {
    departmentId: string,
    storeId?: string,
    firstName: string,
    lastName: string,
    email: string,
    position: string,
    department?: Department,
    attendances?: Attendance[],
    store?: Store,
}

export interface Department extends Table {
    name: string,
    employees?: Employee[],
}

export interface Attendance extends Table {
    employeeId: string,
    checkIn?: string,
    checkOut?: string,
    status: string,
    employee?: Employee,
}

export interface Store extends Table {
    storeKey: string,
    name: string,
    address: string,
    stocksDateVerified: string | null,
    openingTime: string,
    closingTime: string,
    employees?: Employee[],
    storeInventories?: StoreInventory[],
    previousShiftDeliveredStocks?: StoreInventory[],
}

export interface Product extends Table {
    name: string,
    price: number,
    quantity: number,
    description?: string,
    category: string,
    shift: "AM" | "PM" | "Both";
    storeInventories?: StoreInventory[],
}

export interface StoreInventory extends Table {
    productId: string;
    productName: string;
    productCategory: string;
    quantity: number;
    price: number;
    lastVerified?: string;
    lastDeliveryDate?: string;
    pullOutDateTime?: string | null;
}

export interface AuthResponse {
    token: string;
    refreshToken: string;
    expiration: string;
    refreshTokenExpiration: string;
    user: Employee;
}

export interface FastApiResponse {
    message: string;
    success: boolean;
    data?: {
        userId: string;
        jwt_token: string;
    };
}
