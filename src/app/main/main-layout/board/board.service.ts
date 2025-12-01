import { Injectable } from '@angular/core';
import { Post, PostType } from './board.component';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Mountain Adventure',
      subtitle: 'Explore the Peaks',
      content:
        'Discover breathtaking views and challenging trails in the heart of the mountains.',
      imageUrl: 'https://picsum.photos/400/300?random=1',
      author: 'John Smith',
      date: '2024-01-15',
      ownerId: 1,
    },
    {
      id: 2,
      title: 'Ocean Breeze',
      subtitle: 'Coastal Paradise',
      content:
        'Experience the tranquility of pristine beaches and crystal-clear waters.',
      imageUrl: 'https://picsum.photos/400/300?random=2',
      author: 'Sarah Johnson',
      date: '2024-01-18',
      ownerId: 2,
    },
    {
      id: 3,
      title: 'Urban Exploration',
      subtitle: 'City Lights',
      content:
        'Navigate through bustling streets and discover hidden gems in the urban jungle.',
      imageUrl: 'https://picsum.photos/400/300?random=3',
      author: 'Michael Brown',
      date: '2024-01-20',
      ownerId: 1,
    },
    {
      id: 4,
      title: 'Forest Retreat',
      subtitle: "Nature's Sanctuary",
      content:
        'Immerse yourself in the peaceful embrace of ancient woodlands and wildlife.',
      imageUrl: 'https://picsum.photos/400/300?random=4',
      author: 'Emily Davis',
      date: '2024-01-22',
      ownerId: 2,
    },
    {
      id: 5,
      title: 'Desert Dreams',
      subtitle: 'Golden Sands',
      content:
        'Journey through endless dunes and witness spectacular sunsets in the desert.',
      imageUrl: 'https://picsum.photos/400/300?random=5',
      author: 'David Wilson',
      date: '2024-01-25',
      ownerId: 1,
    },
    {
      id: 6,
      title: 'Arctic Wonders',
      subtitle: 'Frozen Beauty',
      content:
        'Marvel at the stunning ice formations and northern lights in the polar regions.',
      imageUrl: 'https://picsum.photos/400/300?random=6',
      author: 'Lisa Anderson',
      date: '2024-01-28',
      ownerId: 2,
    },
    {
      id: 7,
      title: 'Tropical Paradise',
      subtitle: 'Island Escape',
      content:
        'Relax in a lush tropical environment with exotic flora and fauna.',
      imageUrl: 'https://picsum.photos/400/300?random=7',
      author: 'James Martinez',
      date: '2024-02-01',
      ownerId: 1,
    },
    {
      id: 8,
      title: 'Historic Journey',
      subtitle: 'Ancient Ruins',
      content:
        'Step back in time and explore magnificent archaeological wonders.',
      imageUrl: 'https://picsum.photos/400/300?random=8',
      author: 'Jennifer Taylor',
      date: '2024-02-05',
      ownerId: 2,
    },
    {
      id: 9,
      title: 'Wildlife Safari',
      subtitle: 'African Plains',
      content:
        'Witness majestic animals in their natural habitat across vast savannas.',
      imageUrl: 'https://picsum.photos/400/300?random=9',
      author: 'Robert Garcia',
      date: '2024-02-08',
      ownerId: 1,
    },
    {
      id: 10,
      title: 'Countryside Charm',
      subtitle: 'Rolling Hills',
      content:
        'Experience the simple beauty of pastoral landscapes and peaceful villages.',
      imageUrl: 'https://picsum.photos/400/300?random=10',
      author: 'Maria Rodriguez',
      date: '2024-02-12',
      ownerId: 2,
    },
    {
      id: 11,
      title: 'Waterfall Wonders',
      subtitle: 'Cascading Beauty',
      content:
        "Feel the power and majesty of nature's most spectacular waterfalls.",
      imageUrl: 'https://picsum.photos/400/300?random=11',
      author: 'Christopher Lee',
      date: '2024-02-15',
      ownerId: 1,
    },
    {
      id: 12,
      title: 'Canyon Explorer',
      subtitle: 'Deep Gorges',
      content:
        'Descend into dramatic canyons carved by millions of years of erosion.',
      imageUrl: 'https://picsum.photos/400/300?random=12',
      author: 'Amanda White',
      date: '2024-02-18',
      ownerId: 2,
    },
    {
      id: 13,
      title: 'Lake Serenity',
      subtitle: 'Peaceful Waters',
      content:
        'Find tranquility by the still waters of mountain lakes and reflective surfaces.',
      imageUrl: 'https://picsum.photos/400/300?random=13',
      author: 'Daniel Harris',
      date: '2024-02-22',
      ownerId: 1,
    },
    {
      id: 14,
      title: 'Volcano Quest',
      subtitle: 'Fire and Earth',
      content:
        'Discover the raw power of active volcanoes and geothermal wonders.',
      imageUrl: 'https://picsum.photos/400/300?random=14',
      author: 'Jessica Clark',
      date: '2024-02-25',
      ownerId: 2,
    },
    {
      id: 15,
      title: 'Cave Mysteries',
      subtitle: 'Underground World',
      content:
        'Explore hidden caverns filled with stunning stalactites and stalagmites.',
      imageUrl: 'https://picsum.photos/400/300?random=15',
      author: 'Matthew Lewis',
      date: '2024-02-28',
      ownerId: 1,
    },
    {
      id: 16,
      title: 'River Journey',
      subtitle: 'Flowing Adventures',
      content:
        'Navigate winding rivers through diverse landscapes and ecosystems.',
      imageUrl: 'https://picsum.photos/400/300?random=16',
      author: 'Olivia Walker',
      date: '2024-03-03',
      ownerId: 2,
    },
    {
      id: 17,
      title: 'Sky High',
      subtitle: 'Mountain Peaks',
      content:
        'Reach new heights and experience the thrill of high-altitude adventures.',
      imageUrl: 'https://picsum.photos/400/300?random=17',
      author: 'William Hall',
      date: '2024-03-07',
      ownerId: 1,
    },
    {
      id: 18,
      title: 'Garden Paradise',
      subtitle: 'Botanical Beauty',
      content:
        "Wander through colorful gardens showcasing nature's most beautiful blooms.",
      imageUrl: 'https://picsum.photos/400/300?random=18',
      author: 'Sophia Allen',
      date: '2024-03-10',
      ownerId: 2,
    },
    {
      id: 19,
      title: 'Lighthouse Keeper',
      subtitle: 'Coastal Guardian',
      content:
        'Visit historic lighthouses standing sentinel over rocky coastlines.',
      imageUrl: 'https://picsum.photos/400/300?random=19',
      author: 'Benjamin Young',
      date: '2024-03-14',
      ownerId: 1,
    },
    {
      id: 20,
      title: 'Starry Night',
      subtitle: 'Celestial Wonders',
      content:
        'Gaze at the cosmos from dark sky locations perfect for stargazing.',
      imageUrl: 'https://picsum.photos/400/300?random=20',
      author: 'Isabella King',
      date: '2024-03-18',
      ownerId: 2,
    },
    {
      id: 21,
      title: 'Skiing Paradise',
      subtitle: 'Winter Sports',
      content:
        'Hit the slopes and enjoy world-class skiing in pristine mountain resorts.',
      imageUrl: 'https://picsum.photos/400/300?random=21',
      author: 'Thomas Anderson',
      date: '2024-03-22',
      ownerId: 1,
    },
    {
      id: 22,
      title: 'Cultural Festival',
      subtitle: 'Traditional Celebrations',
      content:
        'Experience vibrant cultural festivals showcasing local traditions and heritage.',
      imageUrl: 'https://picsum.photos/400/300?random=22',
      author: 'Emma Wilson',
      date: '2024-03-25',
      ownerId: 2,
    },
    {
      id: 23,
      title: 'Wine Valley',
      subtitle: 'Vineyard Tours',
      content:
        'Explore scenic vineyards and taste exquisite wines in rolling countryside.',
      imageUrl: 'https://picsum.photos/400/300?random=23',
      author: 'Lucas Martinez',
      date: '2024-03-28',
      ownerId: 1,
    },
    {
      id: 24,
      title: 'Sunset Beach',
      subtitle: 'Romantic Getaway',
      content:
        'Watch stunning sunsets on pristine beaches with golden sands and calm waters.',
      imageUrl: 'https://picsum.photos/400/300?random=24',
      author: 'Sophia Garcia',
      date: '2024-04-01',
      ownerId: 2,
    },
    {
      id: 25,
      title: 'Street Food Tour',
      subtitle: 'Culinary Adventure',
      content:
        'Discover authentic local cuisine through vibrant street food markets.',
      imageUrl: 'https://picsum.photos/400/300?random=25',
      author: 'Noah Thompson',
      date: '2024-04-05',
      ownerId: 1,
    },
    {
      id: 26,
      title: 'Yoga Retreat',
      subtitle: 'Wellness Journey',
      content:
        'Rejuvenate mind and body in peaceful settings with expert yoga instruction.',
      imageUrl: 'https://picsum.photos/400/300?random=26',
      author: 'Olivia Brown',
      date: '2024-04-08',
      ownerId: 2,
    },
    {
      id: 27,
      title: 'Art Gallery Walk',
      subtitle: 'Creative Inspiration',
      content:
        'Tour contemporary art galleries featuring works from emerging and established artists.',
      imageUrl: 'https://picsum.photos/400/300?random=27',
      author: 'Ethan Davis',
      date: '2024-04-12',
      ownerId: 1,
    },
    {
      id: 28,
      title: 'Scuba Diving',
      subtitle: 'Underwater Exploration',
      content:
        'Dive into crystal-clear waters and explore vibrant coral reefs and marine life.',
      imageUrl: 'https://picsum.photos/400/300?random=28',
      author: 'Ava Miller',
      date: '2024-04-15',
      ownerId: 2,
    },
    {
      id: 29,
      title: 'Mountain Biking',
      subtitle: 'Adrenaline Rush',
      content:
        'Tackle challenging trails and enjoy thrilling downhill rides through forests.',
      imageUrl: 'https://picsum.photos/400/300?random=29',
      author: 'Mason Wilson',
      date: '2024-04-18',
      ownerId: 1,
    },
    {
      id: 30,
      title: 'Jazz Festival',
      subtitle: 'Live Music',
      content:
        'Enjoy world-class jazz performances in an intimate outdoor setting.',
      imageUrl: 'https://picsum.photos/400/300?random=30',
      author: 'Isabella Moore',
      date: '2024-04-22',
      ownerId: 2,
    },
    {
      id: 31,
      title: 'Hot Air Balloon',
      subtitle: 'Sky Adventure',
      content:
        'Float above stunning landscapes and enjoy panoramic views at sunrise.',
      imageUrl: 'https://picsum.photos/400/300?random=31',
      author: 'Liam Taylor',
      date: '2024-04-25',
      ownerId: 1,
    },
    {
      id: 32,
      title: 'Farmers Market',
      subtitle: 'Fresh Produce',
      content:
        'Browse local organic produce and artisanal goods at community markets.',
      imageUrl: 'https://picsum.photos/400/300?random=32',
      author: 'Charlotte Anderson',
      date: '2024-04-28',
      ownerId: 2,
    },
    {
      id: 33,
      title: 'Rock Climbing',
      subtitle: 'Vertical Challenge',
      content:
        'Scale dramatic rock faces and test your skills on challenging routes.',
      imageUrl: 'https://picsum.photos/400/300?random=33',
      author: 'James Thomas',
      date: '2024-05-01',
      ownerId: 1,
    },
    {
      id: 34,
      title: 'Botanical Garden',
      subtitle: 'Flora Discovery',
      content:
        'Stroll through themed gardens showcasing rare and exotic plant species.',
      imageUrl: 'https://picsum.photos/400/300?random=34',
      author: 'Amelia Jackson',
      date: '2024-05-05',
      ownerId: 2,
    },
    {
      id: 35,
      title: 'Food Festival',
      subtitle: 'Gourmet Experience',
      content:
        'Sample dishes from renowned chefs and discover new culinary trends.',
      imageUrl: 'https://picsum.photos/400/300?random=35',
      author: 'Benjamin White',
      date: '2024-05-08',
      ownerId: 1,
    },
    {
      id: 36,
      title: 'Sailing Adventure',
      subtitle: 'Ocean Voyage',
      content:
        'Navigate coastal waters and explore hidden coves aboard a sailboat.',
      imageUrl: 'https://picsum.photos/400/300?random=36',
      author: 'Mia Harris',
      date: '2024-05-12',
      ownerId: 2,
    },
    {
      id: 37,
      title: 'Photography Workshop',
      subtitle: 'Creative Skills',
      content:
        'Learn professional photography techniques in stunning natural settings.',
      imageUrl: 'https://picsum.photos/400/300?random=37',
      author: 'Alexander Martin',
      date: '2024-05-15',
      ownerId: 1,
    },
    {
      id: 38,
      title: 'Night Market',
      subtitle: 'Evening Shopping',
      content:
        'Browse unique crafts and enjoy street performances at bustling night markets.',
      imageUrl: 'https://picsum.photos/400/300?random=38',
      author: 'Harper Thompson',
      date: '2024-05-18',
      ownerId: 2,
    },
    {
      id: 39,
      title: 'Horseback Riding',
      subtitle: 'Trail Experience',
      content:
        'Explore scenic trails on horseback through meadows and forest paths.',
      imageUrl: 'https://picsum.photos/400/300?random=39',
      author: 'Elijah Garcia',
      date: '2024-05-22',
      ownerId: 1,
    },
    {
      id: 40,
      title: 'Theater Show',
      subtitle: 'Live Performance',
      content:
        'Enjoy captivating theatrical productions in historic performance venues.',
      imageUrl: 'https://picsum.photos/400/300?random=40',
      author: 'Evelyn Martinez',
      date: '2024-05-25',
      ownerId: 2,
    },
  ];

  private postTypes: PostType[] = ['Rent', 'Buy & Sell', 'Events', 'Travel'];

  private cities: { name: string; lat: number; lng: number }[] = [
    { name: 'Tel Aviv, Israel', lat: 32.0853, lng: 34.7818 },
    { name: 'Jerusalem, Israel', lat: 31.7683, lng: 35.2137 },
    { name: 'Haifa, Israel', lat: 32.794, lng: 34.9896 },
    { name: 'New York, USA', lat: 40.7128, lng: -74.006 },
    { name: 'London, UK', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris, France', lat: 48.8566, lng: 2.3522 },
    { name: 'Berlin, Germany', lat: 52.52, lng: 13.405 },
    { name: 'Tokyo, Japan', lat: 35.6762, lng: 139.6503 },
    { name: 'Sydney, Australia', lat: -33.8688, lng: 151.2093 },
    { name: 'Toronto, Canada', lat: 43.6532, lng: -79.3832 },
  ];

  constructor() {
    // Assign a random city and type to posts
    this.posts = this.posts.map((p) => ({
      ...p,
      location: p.location || this.randomCity(),
      type: p.type || this.randomType(),
    }));
  }

  private randomCity(): { lat: number; lng: number; name: string } {
    const idx = Math.floor(Math.random() * this.cities.length);
    const c = this.cities[idx];
    return { lat: c.lat, lng: c.lng, name: c.name };
  }

  private randomType(): PostType {
    const idx = Math.floor(Math.random() * this.postTypes.length);
    return this.postTypes[idx];
  }

  getPosts(): Post[] {
    return this.posts;
  }
}
