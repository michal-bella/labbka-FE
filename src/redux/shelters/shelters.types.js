export const SHELTERS_ACTION_TYPES = {
	// zaciatok kedy zacne FETCH-ovat data
	FETCH_SHELTERS_START: "FETCH_SHELTERS_START",
	// kedy su FETCH-nute data spravne
	FETCH_SHELTERS_SUCCESS: "FETCH_SHELTERS_SUCCESS",
	// AK nastane chyba pri FETCH-ovani - (server padne, internet padne, zle credentials a pod...)
	FETCH_SHELTERS_FAILURE: "FETCH_SHELTERS_FAILURE",

	FETCH_ONE_SHELTER_START: "FETCH_ONE_SHELTER_START",
	FETCH_ONE_SHELTER_SUCCESS: "FETCH_ONE_SHELTER_SUCCESS",
	FETCH_ONE_SHELTER_FAILURE: "FETCH_ONE_SHELTER_FAILURE"
};
