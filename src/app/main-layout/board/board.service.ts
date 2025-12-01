import { Injectable } from '@angular/core';
import { Post, PostType } from './board.component';
import { Observable, of } from 'rxjs';

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
      ownerId: 1,
      postType: 'Rent',
      location: 'Tel Aviv, Israel',
    },
    {
      id: 2,
      title: 'Ocean Breeze',
      subtitle: 'Coastal Paradise',
      content:
        'Experience the tranquility of pristine beaches and crystal-clear waters.',
      imageUrl: 'https://picsum.photos/400/300?random=2',
      ownerId: 2,
      postType: 'Buy & Sell',
      location: 'Jerusalem, Israel',
    },
    {
      id: 3,
      title: 'Urban Exploration',
      subtitle: 'City Lights',
      content:
        'Navigate through bustling streets and discover hidden gems in the urban jungle.',
      imageUrl: 'https://picsum.photos/400/300?random=3',
      ownerId: 1,
      postType: 'Events',
      location: 'New York, United States',
    },
    {
      id: 4,
      title: 'Forest Retreat',
      subtitle: "Nature's Sanctuary",
      content:
        'Immerse yourself in the peaceful embrace of ancient woodlands and wildlife.',
      imageUrl: 'https://picsum.photos/400/300?random=4',
      ownerId: 2,
      postType: 'Travel',
      location: 'London, UK',
    },
    {
      id: 5,
      title: 'Desert Dreams',
      subtitle: 'Golden Sands',
      content:
        'Journey through endless dunes and witness spectacular sunsets in the desert.',
      imageUrl: 'https://picsum.photos/400/300?random=5',
      ownerId: 1,
      postType: 'Travel',
      location: 'Paris, France',
    },
    {
      id: 6,
      title: 'Arctic Wonders',
      subtitle: 'Frozen Beauty',
      content:
        'Marvel at the stunning ice formations and northern lights in the polar regions.',
      imageUrl: 'https://picsum.photos/400/300?random=6',
      ownerId: 2,
      postType: 'Travel',
      location: 'Berlin, Germany',
    },
    {
      id: 7,
      title: 'Tropical Paradise',
      subtitle: 'Island Escape',
      content:
        'Relax in a lush tropical environment with exotic flora and fauna.',
      imageUrl: 'https://picsum.photos/400/300?random=7',
      ownerId: 1,
      postType: 'Travel',
      location: 'Tokyo, Japan',
    },
    {
      id: 8,
      title: 'Historic Journey',
      subtitle: 'Ancient Ruins',
      content:
        'Step back in time and explore magnificent archaeological wonders.',
      imageUrl: 'https://picsum.photos/400/300?random=8',
      ownerId: 2,
      postType: 'Events',
      location: 'Sydney, Australia',
    },
    {
      id: 9,
      title: 'Wildlife Safari',
      subtitle: 'African Plains',
      content:
        'Witness majestic animals in their natural habitat across vast savannas.',
      imageUrl: 'https://picsum.photos/400/300?random=9',
      ownerId: 1,
      postType: 'Travel',
      location: 'Toronto, Canada',
    },
    {
      id: 10,
      title: 'Countryside Charm',
      subtitle: 'Rolling Hills',
      content:
        'Experience the simple beauty of pastoral landscapes and peaceful villages.',
      imageUrl: 'https://picsum.photos/400/300?random=10',
      ownerId: 2,
      postType: 'Travel',
      location: 'Tel Aviv, Israel',
    },
    {
      id: 11,
      title: 'Waterfall Wonders',
      subtitle: 'Cascading Beauty',
      content:
        "Feel the power and majesty of nature's most spectacular waterfalls.",
      imageUrl: 'https://picsum.photos/400/300?random=11',
      ownerId: 1,
      postType: 'Travel',
      location: 'Jerusalem, Israel',
    },
    {
      id: 12,
      title: 'Canyon Explorer',
      subtitle: 'Deep Gorges',
      content:
        'Descend into dramatic canyons carved by millions of years of erosion.',
      imageUrl: 'https://picsum.photos/400/300?random=12',
      ownerId: 2,
      postType: 'Events',
      location: 'Haifa, Israel',
    },
    {
      id: 13,
      title: 'Lake Serenity',
      subtitle: 'Peaceful Waters',
      content:
        'Find tranquility by the still waters of mountain lakes and reflective surfaces.',
      imageUrl: 'https://picsum.photos/400/300?random=13',
      ownerId: 1,
      postType: 'Travel',
      location: 'New York, United States',
    },
    {
      id: 14,
      title: 'Volcano Quest',
      subtitle: 'Fire and Earth',
      content:
        'Discover the raw power of active volcanoes and geothermal wonders.',
      imageUrl: 'https://picsum.photos/400/300?random=14',
      ownerId: 2,
      postType: 'Travel',
      location: 'London, UK',
    },
    {
      id: 15,
      title: 'Cave Mysteries',
      subtitle: 'Underground World',
      content:
        'Explore hidden caverns filled with stunning stalactites and stalagmites.',
      imageUrl: 'https://picsum.photos/400/300?random=15',
      ownerId: 1,
      postType: 'Events',
      location: 'Paris, France',
    },
    {
      id: 16,
      title: 'River Journey',
      subtitle: 'Flowing Adventures',
      content:
        'Navigate winding rivers through diverse landscapes and ecosystems.',
      imageUrl: 'https://picsum.photos/400/300?random=16',
      ownerId: 2,
      postType: 'Travel',
      location: 'Berlin, Germany',
    },
    {
      id: 17,
      title: 'Sky High',
      subtitle: 'Mountain Peaks',
      content:
        'Reach new heights and experience the thrill of high-altitude adventures.',
      imageUrl: 'https://picsum.photos/400/300?random=17',
      ownerId: 1,
      postType: 'Travel',
      location: 'Tokyo, Japan',
    },
    {
      id: 18,
      title: 'Garden Paradise',
      subtitle: 'Botanical Beauty',
      content:
        "Wander through colorful gardens showcasing nature's most beautiful blooms.",
      imageUrl: 'https://picsum.photos/400/300?random=18',
      ownerId: 2,
      postType: 'Events',
      location: 'Sydney, Australia',
    },
    {
      id: 19,
      title: 'Lighthouse Keeper',
      subtitle: 'Coastal Guardian',
      content:
        'Visit historic lighthouses standing sentinel over rocky coastlines.',
      imageUrl: 'https://picsum.photos/400/300?random=19',
      ownerId: 1,
      postType: 'Events',
      location: 'Toronto, Canada',
    },
    {
      id: 20,
      title: 'Starry Night',
      subtitle: 'Celestial Wonders',
      content:
        'Gaze at the cosmos from dark sky locations perfect for stargazing.',
      imageUrl: 'https://picsum.photos/400/300?random=20',
      ownerId: 2,
      postType: 'Travel',
      location: 'Tel Aviv, Israel',
    },
    {
      id: 21,
      title: 'Skiing Paradise',
      subtitle: 'Winter Sports',
      content:
        'Hit the slopes and enjoy world-class skiing in pristine mountain resorts.',
      imageUrl: 'https://picsum.photos/400/300?random=21',
      ownerId: 1,
      postType: 'Events',
      location: 'Jerusalem, Israel',
    },
    {
      id: 22,
      title: 'Cultural Festival',
      subtitle: 'Traditional Celebrations',
      content:
        'Experience vibrant cultural festivals showcasing local traditions and heritage.',
      imageUrl: 'https://picsum.photos/400/300?random=22',
      ownerId: 2,
      postType: 'Events',
      location: 'Haifa, Israel',
    },
    {
      id: 23,
      title: 'Wine Valley',
      subtitle: 'Vineyard Tours',
      content:
        'Explore scenic vineyards and taste exquisite wines in rolling countryside.',
      imageUrl: 'https://picsum.photos/400/300?random=23',
      ownerId: 1,
      postType: 'Travel',
      location: 'New York, United States',
    },
    {
      id: 24,
      title: 'Sunset Beach',
      subtitle: 'Romantic Getaway',
      content:
        'Watch stunning sunsets on pristine beaches with golden sands and calm waters.',
      imageUrl: 'https://picsum.photos/400/300?random=24',
      ownerId: 2,
      postType: 'Travel',
      location: 'London, UK',
    },
    {
      id: 25,
      title: 'Street Food Tour',
      subtitle: 'Culinary Adventure',
      content:
        'Discover authentic local cuisine through vibrant street food markets.',
      imageUrl: 'https://picsum.photos/400/300?random=25',
      ownerId: 1,
      postType: 'Events',
      location: 'Paris, France',
    },
    {
      id: 26,
      title: 'Yoga Retreat',
      subtitle: 'Wellness Journey',
      content:
        'Rejuvenate mind and body in peaceful settings with expert yoga instruction.',
      imageUrl: 'https://picsum.photos/400/300?random=26',
      ownerId: 2,
      postType: 'Events',
      location: 'Berlin, Germany',
    },
    {
      id: 27,
      title: 'Art Gallery Walk',
      subtitle: 'Creative Inspiration',
      content:
        'Tour contemporary art galleries featuring works from emerging and established artists.',
      imageUrl: 'https://picsum.photos/400/300?random=27',
      ownerId: 1,
      postType: 'Events',
      location: 'Tokyo, Japan',
    },
    {
      id: 28,
      title: 'Scuba Diving',
      subtitle: 'Underwater Exploration',
      content:
        'Dive into crystal-clear waters and explore vibrant coral reefs and marine life.',
      imageUrl: 'https://picsum.photos/400/300?random=28',
      ownerId: 2,
      postType: 'Travel',
      location: 'Sydney, Australia',
    },
    {
      id: 29,
      title: 'Mountain Biking',
      subtitle: 'Adrenaline Rush',
      content:
        'Tackle challenging trails and enjoy thrilling downhill rides through forests.',
      imageUrl: 'https://picsum.photos/400/300?random=29',
      ownerId: 1,
      postType: 'Events',
      location: 'Toronto, Canada',
    },
    {
      id: 30,
      title: 'Jazz Festival',
      subtitle: 'Live Music',
      content:
        'Enjoy world-class jazz performances in an intimate outdoor setting.',
      imageUrl: 'https://picsum.photos/400/300?random=30',
      ownerId: 2,
      postType: 'Events',
      location: 'Tel Aviv, Israel',
    },
    {
      id: 31,
      title: 'Hot Air Balloon',
      subtitle: 'Sky Adventure',
      content:
        'Float above stunning landscapes and enjoy panoramic views at sunrise.',
      imageUrl: 'https://picsum.photos/400/300?random=31',
      ownerId: 1,
      postType: 'Travel',
      location: 'Jerusalem, Israel',
    },
    {
      id: 32,
      title: 'Farmers Market',
      subtitle: 'Fresh Produce',
      content:
        'Browse local organic produce and artisanal goods at community markets.',
      imageUrl: 'https://picsum.photos/400/300?random=32',
      ownerId: 2,
      postType: 'Events',
      location: 'Haifa, Israel',
    },
    {
      id: 33,
      title: 'Rock Climbing',
      subtitle: 'Vertical Challenge',
      content:
        'Scale dramatic rock faces and test your skills on challenging routes.',
      imageUrl: 'https://picsum.photos/400/300?random=33',
      ownerId: 1,
      postType: 'Events',
      location: 'New York, United States',
    },
    {
      id: 34,
      title: 'Botanical Garden',
      subtitle: 'Flora Discovery',
      content:
        'Stroll through themed gardens showcasing rare and exotic plant species.',
      imageUrl: 'https://picsum.photos/400/300?random=34',
      ownerId: 2,
      postType: 'Events',
      location: 'London, UK',
    },
    {
      id: 35,
      title: 'Food Festival',
      subtitle: 'Gourmet Experience',
      content:
        'Sample dishes from renowned chefs and discover new culinary trends.',
      imageUrl: 'https://picsum.photos/400/300?random=35',
      ownerId: 1,
      postType: 'Events',
      location: 'Paris, France',
    },
    {
      id: 36,
      title: 'Sailing Adventure',
      subtitle: 'Ocean Voyage',
      content:
        'Navigate coastal waters and explore hidden coves aboard a sailboat.',
      imageUrl: 'https://picsum.photos/400/300?random=36',
      ownerId: 2,
      postType: 'Travel',
      location: 'Berlin, Germany',
    },
    {
      id: 37,
      title: 'Photography Workshop',
      subtitle: 'Creative Skills',
      content:
        'Learn professional photography techniques in stunning natural settings.',
      imageUrl: 'https://picsum.photos/400/300?random=37',
      ownerId: 1,
      postType: 'Events',
      location: 'Tokyo, Japan',
    },
    {
      id: 38,
      title: 'Night Market',
      subtitle: 'Evening Shopping',
      content:
        'Browse unique crafts and enjoy street performances at bustling night markets.',
      imageUrl: 'https://picsum.photos/400/300?random=38',
      ownerId: 2,
      postType: 'Events',
      location: 'Sydney, Australia',
    },
    {
      id: 39,
      title: 'Horseback Riding',
      subtitle: 'Trail Experience',
      content:
        'Explore scenic trails on horseback through meadows and forest paths.',
      imageUrl: 'https://picsum.photos/400/300?random=39',
      ownerId: 1,
      postType: 'Travel',
      location: 'Toronto, Canada',
    },
    {
      id: 40,
      title: 'Theater Show',
      subtitle: 'Live Performance',
      content:
        'Enjoy captivating theatrical productions in historic performance venues.',
      imageUrl: 'https://picsum.photos/400/300?random=40',
      ownerId: 2,
      postType: 'Events',
      location: 'Tel Aviv, Israel',
    },
  ];

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }
}
