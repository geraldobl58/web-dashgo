/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require('@prisma/client')

const database = new PrismaClient()

async function main() {
  try {
    await database.orders.createMany({
      data: [
        {
          title: 'Manxman, The',
          category: 'Asphalt Paving',
          description:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.'
        },
        {
          title: 'Ganes',
          category: 'Fire Protection',
          description:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'
        },
        {
          title: 'People, Places, Things',
          category: 'Painting & Vinyl Wall Covering',
          description:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'
        },
        {
          title: 'Raid on Rommel',
          category: 'Marlite Panels (FED)',
          description:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
        },
        {
          title: 'Alphabet Killer, The',
          category: 'Landscaping & Irrigation',
          description:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
        },
        {
          title: 'I Love, You Love (Ja milujem, ty milujes)',
          category: 'Roofing (Asphalt)',
          description:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.'
        },
        {
          title: "Twelve Tasks of Asterix, The (Les douze travaux d'Astérix)",
          category: 'Plumbing & Medical Gas',
          description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.'
        },
        {
          title: 'Oranges, The',
          category: 'Drywall & Acoustical (FED)',
          description:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.'
        },
        {
          title: 'Formula 51',
          category: 'Framing (Steel)',
          description:
            'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.'
        },
        {
          title: 'Northfork',
          category: 'Retaining Wall and Brick Pavers',
          description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.'
        },
        {
          title: 'Wild Heritage',
          category: 'Fire Sprinkler System',
          description:
            'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.'
        },
        {
          title: 'Kawa',
          category: 'Electrical and Fire Alarm',
          description:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.'
        },
        {
          title: 'Mad Monster Party?',
          category: 'Framing (Steel)',
          description:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.'
        },
        {
          title: 'Haunted House',
          category: 'EIFS',
          description:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.'
        },
        {
          title: 'Battle of the Year',
          category: 'Curb & Gutter',
          description:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.'
        },
        {
          title: 'Pelican Brief, The',
          category: 'Roofing (Metal)',
          description:
            'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'
        },
        {
          title: 'Daughters of Dolma',
          category: 'Landscaping & Irrigation',
          description:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.'
        },
        {
          title: 'Woman in Black, The',
          category: 'Structural & Misc Steel Erection',
          description:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.'
        },
        {
          title: 'Scarlet Letter, The',
          category: 'Roofing (Asphalt)',
          description:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.'
        },
        {
          title: 'Dracula',
          category: 'Drywall & Acoustical (MOB)',
          description:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.'
        },
        {
          title:
            'Garden of the Finzi-Continis, The (Giardino dei Finzi-Contini, Il)',
          category: 'Soft Flooring and Base',
          description:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.'
        },
        {
          title: 'Closely Watched Trains (Ostre sledované vlaky)',
          category: 'Asphalt Paving',
          description:
            'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'
        },
        {
          title: 'Proof',
          category: 'Masonry & Precast',
          description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.'
        },
        {
          title: 'El tren de la memoria',
          category: 'Sitework & Site Utilities',
          description:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.'
        },
        {
          title: "Pee-wee's Big Adventure",
          category: 'Exterior Signage',
          description:
            'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'
        },
        {
          title: 'Bad Guy (Nabbeun namja)',
          category: 'Ornamental Railings',
          description:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
        },
        {
          title: 'Fidanzati, I (Fiances, The)',
          category: 'Termite Control',
          description:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.'
        },
        {
          title: 'Password: Uccidete agente Gordon',
          category: 'Plumbing & Medical Gas',
          description:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
          title:
            "Creature Wasn't Nice, The (a.k.a. Naked Space) (a.k.a. Spaceship)",
          category: 'Waterproofing & Caulking',
          description:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
        },
        {
          title: 'George & A.J.',
          category: 'Site Furnishings',
          description:
            'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.'
        },
        {
          title: 'Amazonia',
          category: 'Casework',
          description:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.'
        },
        {
          title: 'North Avenue Irregulars, The',
          category: 'Electrical and Fire Alarm',
          description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.'
        },
        {
          title: 'Django, Kill... If You Live, Shoot! (Se sei vivo spara)',
          category: 'Roofing (Metal)',
          description:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.'
        },
        {
          title: 'Daughter of the Nile (Ni luo he nu er)',
          category: 'Waterproofing & Caulking',
          description:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.'
        },
        {
          title: 'Fear Over the City',
          category: 'Framing (Wood)',
          description:
            'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.'
        },
        {
          title: 'I Think I Love My Wife',
          category: 'Landscaping & Irrigation',
          description:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.'
        },
        {
          title: 'Mask of Fu Manchu, The',
          category: 'Masonry',
          description:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.'
        },
        {
          title: 'King Lines',
          category: 'Roofing (Metal)',
          description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.'
        },
        {
          title: 'In Tranzit',
          category: 'Drywall & Acoustical (MOB)',
          description:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.'
        },
        {
          title: 'Lady in Red, The',
          category: 'Exterior Signage',
          description:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.'
        },
        {
          title: 'Conman (Du Xia 1999)',
          category: 'Elevator',
          description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.'
        },
        {
          title: 'Woman in The Septic Tank, The (Ang Babae sa septic tank)',
          category: 'Electrical and Fire Alarm',
          description:
            'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.'
        },
        {
          title: 'Mysteries of Pittsburgh, The',
          category: 'Site Furnishings',
          description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.'
        },
        {
          title: 'Playing It Cool',
          category: 'Drywall & Acoustical (MOB)',
          description:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.'
        },
        {
          title: 'Twice Born (Venuto al mondo)',
          category: 'Site Furnishings',
          description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.'
        },
        {
          title: 'Shutter',
          category: 'Exterior Signage',
          description:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'
        },
        {
          title: 'Love and a Bullet',
          category: 'Exterior Signage',
          description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'
        },
        {
          title: 'Lazybones',
          category: 'Electrical',
          description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'
        },
        {
          title: 'Scarecrow, The',
          category: 'Asphalt Paving',
          description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.'
        },
        {
          title: 'My Neighbor Totoro (Tonari no Totoro)',
          category: 'Electrical and Fire Alarm',
          description:
            'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'
        },
        {
          title: 'Assault on a Queen',
          category: 'Masonry',
          description:
            'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
        }
      ]
    })

    console.log('Successfully created')
  } catch (error) {
    console.log('Error seeding the database orders')
  } finally {
    await database.$disconnect()
  }
}

main()
