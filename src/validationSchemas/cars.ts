export const addCarBodySchema = {
    plate: {
        notEmpty: {
            errorMessage: 'Plate cannot be empty'
        },
        isString: {
            errorMessage: 'Plate must be a string'
        }
    },
    transmission: {
        notEmpty: {
            errorMessage: 'Must explictly imply transmission'
        },
        isString: {
            errorMessage: 'Transmission must be a string'
        }
    },
    manufacture: {
        notEmpty: {
            errorMessage: 'Manufacture cannot be empty'
        },
        isString: {
            errorMessage: 'Manufacture can only be a string'
        }
    },
    rate: {
        notEmpty: {
            errorMessage: 'Rate must not be empty'
        },
        isString: {
            errorMessage: 'Input rate as a string'
        },
        isNumeric: {
            no_symbols: true,
            errorMessage: 'Rate must be numeric'
        }
    },
    description: {
        notEmpty: {
            errorMessage: 'Please input some descriptions'
        },
        isString: {
            errorMessage: 'Descriptions can only be a string'
        },
    },
    model: {
        notEmpty: {
            errorMessage: 'Model cannot be empty'
        },
        isString: {
            errorMessage: 'Model must be a string'
        }
    },
    availableAt: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Must specify availability'
        },
        isString: {
            errorMessage: 'availableDate must be a string'
        },
        isISO8601: {
            errorMessage: 'availableDate must be in ISO8601 format'
        }
    },
    type: {
        notEmpty: {
            errorMessage: 'Type cannot be empty'
        },
        isString: {
            errorMessage: 'Type must be a string'
        }
    },
    year: {
        notEmpty: {
            errorMessage: 'Must specify the year the car is built'
        },
        isInt: {
            errorMessage: 'Year must be integer'
        }
    },
    options: {
        notEmpty: {
            errorMessage: 'Options field must exist. If the car does not have any options, leave an empty array'
        },
        isArray: {
            errorMessage: 'Options must be an array'
        }
    },
    specs: {
        notEmpty: {
            errorMessage: 'Specs field must exist. If the car does not have any specs, leave an empty array'
        },
        isArray: {
            errorMessage: 'Specs must be an array'
        }
    },
    updatedAt: {
        optional: {
            options: {
                values: undefined
            }
        },
        isString: {
            errorMessage: 'creationTimestamp must be a string'
        },
        isISO8601: {
            errorMessage: 'creationTimestamp must be in ISO8601 format'
        }
    },
    deletedAt: {
        optional: {
            options: {
                values: undefined
            }
        },
        isString: {
            errorMessage: 'creationTimestamp must be a string'
        },
        isISO8601: {
            errorMessage: 'creationTimestamp must be in ISO8601 format'
        }
    }
}

export const patchCarBodySchema = {
    plate: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Plate cannot be empty'
        },
        isString: {
            errorMessage: 'Plate must be a string'
        }
    },
    transmission: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Must explictly imply transmission'
        },
        isString: {
            errorMessage: 'Transmission must be a string'
        }
    },
    manufacture: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Manufacture cannot be empty'
        },
        isString: {
            errorMessage: 'Manufacture can only be a string'
        }
    },
    rate: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Rate must not be empty'
        },
        isString: {
            errorMessage: 'Input rate as a string'
        },
        isNumeric: {
            no_symbols: true,
            errorMessage: 'Rate must be numeric'
        }
    },
    description: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Please input some descriptions'
        },
        isString: {
            errorMessage: 'Descriptions can only be a string'
        },
    },
    model: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Model cannot be empty'
        },
        isString: {
            errorMessage: 'Model must be a string'
        }
    },
    availableAt: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Must specify availability'
        },
        isString: {
            errorMessage: 'availableDate must be a string'
        },
        isISO8601: {
            errorMessage: 'availableDate must be in ISO8601 format'
        }
    },
    type: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Type cannot be empty'
        },
        isString: {
            errorMessage: 'Type must be a string'
        }
    },
    year: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Must specify the year the car is built'
        },
        isInt: {
            errorMessage: 'Year must be integer'
        }
    },
    options: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Options field must exist. If the car does not have any options, leave an empty array'
        },
        isArray: {
            errorMessage: 'Options must be an array'
        }
    },
    specs: {
        optional: {
            options: {
                values: undefined
            }
        },
        notEmpty: {
            errorMessage: 'Specs field must exist. If the car does not have any specs, leave an empty array'
        },
        isArray: {
            errorMessage: 'Specs must be an array'
        }
    },
    updatedAt: {
        optional: {
            options: {
                values: undefined
            }
        },
        isString: {
            errorMessage: 'creationTimestamp must be a string'
        },
        isISO8601: {
            errorMessage: 'creationTimestamp must be in ISO8601 format'
        }
    },
    deletedAt: {
        optional: {
            options: {
                values: undefined
            }
        },
        isString: {
            errorMessage: 'creationTimestamp must be a string'
        },
        isISO8601: {
            errorMessage: 'creationTimestamp must be in ISO8601 format'
        }
    }
}

export const addPatchCarDeletionTimestampBodyValueSchema = {
    deletedAt: {
        optional: {
            options: {
                values: undefined
            }
        }
    }
}

export const getCarsQuerySchema = {
    availability: {
        optional: {
            options: {
                checkFalsy: true
            }
        },
        toLowerCase: true
    },
    manufacture: {
        optional: {
            options: {
                checkFalsy: true
            }
        },
        toLowerCase: true,
        isAscii: {
            errorMessage: 'Manufacture chars must be ASCII chars'
        }
    },
    year: {
        optional: {
            options: {
                checkFalsy: true
            }
        },
        isLength: {
            options: {
                max: 16
            },
            errorMessage: 'Year query value must be 4-digits numeric'
        },
        toInt: true
    },
    transmission: {
        optional: {
            options: {
                checkFalsy: true
            }
        },
        toLowerCase: true,
    },
    sortByYear: {
        optional: {
            options: {
                checkFalsy: true
            }
        },
        toLowerCase: true,
    }
}

export const carsParamIdSchema = {
    id: {
        notEmpty: {
            errorMessage: 'ID parameter cannot be empty'
        },
        isUUID: {
            version: 'all',
            errorMessage: 'Invalid ID parameter: must be an UUID'
        },
        toLowerCase: true
    }
}