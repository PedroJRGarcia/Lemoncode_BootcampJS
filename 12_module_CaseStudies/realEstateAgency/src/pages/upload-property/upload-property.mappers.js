export const mapNewPropertyVmToApi = newProperty => {
    return {
        id: newProperty.id,
        title: newProperty.title,
        notes: newProperty.notes,
        email: newProperty.email,
        phone: newProperty.phone,
        saleTypeIds: newProperty.saleTypeIds,
        address: newProperty.address,
        city: newProperty.city,
        provinceId: newProperty.provinceId,
        squareMeter: newProperty.squareMeter,
        rooms: newProperty.rooms,
        bathrooms: newProperty.bathrooms,
        locationUrl: newProperty.locationUrl,
        mainFeatures: newProperty.mainFeatures,
        equipmentIds: newProperty.equipmentIds,
        images: newProperty.images,
    }
};