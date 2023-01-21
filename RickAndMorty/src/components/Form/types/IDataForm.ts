interface IDataForm {
  name: string;
  birthday: string;
  country: string;
  sex: boolean | 'female' | 'male';
  pathPhoto: string;
  confirm: boolean;
}

export default IDataForm;
