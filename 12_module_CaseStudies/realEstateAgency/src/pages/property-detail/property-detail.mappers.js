export const mapPropertyDetailApiToVm = (propertyDetail, equipmentList) => {
    return {
        id: propertyDetail.id,
        mainImage: Array.isArray(propertyDetail.images) ? propertyDetail.images[0] : '',
        title: propertyDetail.title,
        city: propertyDetail.city,
        rooms: `${propertyDetail.rooms} ${getRoomWord(propertyDetail.rooms)}`,
        squareMeter: `${propertyDetail.squareMeter} m2`,
        bathrooms: `${propertyDetail.bathrooms} ${getBathRoomWord(propertyDetail.bathrooms)}`,
        price: `${propertyDetail.price.toLocaleString()} €`,
        notes: propertyDetail.notes,
        mainFeatures: propertyDetail.mainFeatures,
        equipments: getEquipments(propertyDetail.equipmentIds, equipmentList),
        locationUrl: propertyDetail.locationUrl,
        images: Array.isArray(propertyDetail.images) ? propertyDetail.images : '',
    }
};

const getRoomWord = rooms => rooms > 1 ? 'habitaciones' : 'habitación';
const getBathRoomWord = bathrooms => bathrooms > 1 ? 'baños' : 'baño';

const getEquipments = (properties, equipmentList) => {
    const equipmentDetail = properties.map(id => {
        return equipmentList.find(equipment => equipment.id === id).name;
    });
    return equipmentDetail;
};

export const mapContactVmToApi = contact => {
    return {
        id: contact.id,
        email: contact.email,
        message: contact.message,
    };
};