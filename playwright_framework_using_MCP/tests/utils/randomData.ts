const randomSuffix = () => Math.random().toString(36).substring(2, 8);

export function generateEmployeeData() {
  const firstName = `Test${randomSuffix()}`;
  const lastName = `User${randomSuffix()}`;
  const fullName = `${firstName} ${lastName}`;
  const username = `user_${firstName.toLowerCase()}_${randomSuffix()}`;
  const password = `P@ssw0rd${Math.floor(Math.random() * 1000)}`;

  return {
    firstName,
    middleName: 'Q',
    lastName,
    username,
    password,
    fullName
  };
}
