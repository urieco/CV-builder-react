import uniqid from 'uniqid'

const template = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '1234567890',
  school: 'MIT University',
  study: 'Bachelor of Science',
  dateStart: '2017-08-01',
  dateFinish: '2021-08-01',
  workAt: [
    {
      company: 'Facebook',
      position: 'Web Developer',
      task: 'Developing websites',
      dateFrom: '2022-09-01',
      dateTo: '2023-06-01',
      id: uniqid()
    },
    {
      company: 'Google',
      position: 'Cloud Computing Consultant',
      task: 'Consulting clients on cloud services things',
      dateFrom: '2021-09-01',
      dateTo: '2022-09-01',
      id: uniqid()
    }
  ],
  warning: false
}

export { template }