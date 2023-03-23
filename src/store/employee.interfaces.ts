export interface IStatus {
  tag_id: number,
  tag: string,
  description: string,
}

export interface IEmployee {
  id: 1,
  full_name: string,
  inn: string,
  address: string,
  date_birth: string,
  age: number,
  type_contract: string,
  type_contact_id: number,
  gender: string,
  gender_id: number,
  country: string,
  country_id: number,
  position: string,
  position_id: number,
  status: IStatus,
}
