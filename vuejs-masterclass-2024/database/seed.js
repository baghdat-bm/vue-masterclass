import { faker } from '@faker-js/faker';
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.VITE_SUPASE_URL,
  process.env.SERVICE_ROLE_KEY
)

const seedProjects = async(numEntries) => {

  const projects = [];
  const slugs = [];
  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3);
    const slug = name.toLocaleLowerCase().replace(/ /g, '-');
    projects.push({
      name: name,
      slug: slug,
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    });
    slugs.push(slug);
  }

  await supabase.from('projects').insert(projects)

  const tasks = [];
  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3);
    const index = faker.number.int(numEntries-1);
    // const project_id = await supabase
    //   .from('projects')
    //   .select('id').eq('slug', slugs[index]);
    tasks.push({
      name: name,
      description: faker.lorem.words(10),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
      project_id: index,
      due_data: faker.date.future()
    })
  }

  await supabase.from('tasks').insert(tasks)
}

await seedProjects(10)
