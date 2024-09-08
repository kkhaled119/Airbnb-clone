// ../utils/api.ts
import { ExploreData, LiveData, searchResultData } from "../types/app";

export const getExplore = async (): Promise<ExploreData> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    if (!res.ok) {
      throw new Error(`Error fetching explore data: ${res.statusText}`);
    }
    const exploreData: ExploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if an error occurs
  }
};

export const getLive = async (): Promise<LiveData> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    if (!res.ok) {
      throw new Error(`Error fetching live data: ${res.statusText}`);
    }
    const liveData: LiveData = await res.json();
    return liveData;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if an error occurs
  }
};

export const getSearchResult = async (): Promise<searchResultData> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    if (!res.ok) {
      throw new Error(`Error fetching search result data: ${res.statusText}`);
    }
    const searchResultData: searchResultData = await res.json();
    return searchResultData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
