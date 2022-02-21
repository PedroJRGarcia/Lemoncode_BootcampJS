export const mapNewPropertyVmToApi = newProperty => {
    return {
        id: newProperty.id,
        title: newProperty.title,
        notes: newProperty.notes,
        email: newProperty.email,
        phone: newProperty.phone,
        price: parseInt(newProperty.price),
        saleTypeIds: newProperty.saleTypeIds,
        address: newProperty.address,
        city: newProperty.city,
        provinceId: newProperty.provinceId,
        squareMeter: parseInt(newProperty.squareMeter),
        rooms: parseInt(newProperty.rooms),
        bathrooms: parseInt(newProperty.bathrooms),
        locationUrl: newProperty.locationUrl,
        mainFeatures: newProperty.mainFeatures,
        equipmentIds: newProperty.equipmentIds,
        images: newProperty.images,
    }
};