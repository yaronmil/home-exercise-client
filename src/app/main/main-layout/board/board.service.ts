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
  ];

  private postTypes: PostType[] = ['rent', 'buy & sell', 'events', 'travel'];

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
