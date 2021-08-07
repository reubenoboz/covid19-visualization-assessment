import covidAxiosInstance from '../axios/covid.axios'
import {covidApi} from '../apis/covid.api'
import { appNotification } from '../../components';

//Get Covid Data
export const GetAllData = async () => { 
    try {
      const response = await covidAxiosInstance.get(
        `${covidApi.getCovidData}`,
      );
      return response;
    } catch (err) {
        appNotification(err.message, 'Something went wrong!', 'error');
        throw err
    }
  };
  