import { faker } from '@faker-js/faker';
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.VITE_SUPASE_URL,
  process.env.SERVICE_ROLE_KEY
)

const seedProjects = async(numEntries) => {

  const projects = [];

  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3);
    projects.push({
      name: name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    })
  }

  await supabase.from('projects').insert(projects)
}

await seedProjects(10)
