interface Room {
    address: string;
    airConditioned: boolean;
    breakfast: boolean;
    category: string;
    createdAt: string;
    description: string;
    guestCapacity: number;
    images: [
        {
            url: string;
        }
    ];
    internet: boolean;
    name: string;
    numOfBeds: number;
    numberOfReview: number;
    petsAllowed: boolean;
    pricePerNight: number;
    rating: number;
    reviews: [];
    roomCleaning: boolean;
    updatedAt: string;
    _id: string;
}
