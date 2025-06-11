import React, { useState } from 'react';
import AboutSection from '../components/AboutSection';
import personImage from '../imag/person.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';

const timelineData = [
  { year: '2002', title: 'Born', description: 'Born in Seoul, South Korea🇰🇷' },
  { year: '2012', title: 'Move to Philippines', description: 'For study' },
  { year: '2022', title: 'Move back to South Korea', description: 'Due to COVID-19' },
  { year: '2023', title: 'Moved to New Zealand', description: 'Started IT Course at SIT' },
  { year: '2023', title: 'Programming', description: 'Java, C#, HTML/CSS, Networking, etc.' },
  { year: '2024', title: 'Development', description: 'Unity, Android, Laravel, Azure' },
  { year: '2025', title: 'Project', description: 'SIT Graduation Dashboard System' },
  { year: '2025', title: 'Portfolio', description: 'Built this Portfolio using React' },
  { year: '2025', title: 'Graduation', description: 'Expected Dec 2025 🎓' },
];

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSend = () => {
    console.log('Sender:', formData.name);
    console.log('Message:', formData.message);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <AboutSection />

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
        <img
          className="h-32 w-32 rounded-full object-cover border-4 border-purple-600 shadow-lg"
          src={personImage}
          alt="Jinhyeok Yang"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold text-purple-400">Jinhyeok Yang</h3>
          <p className="text-gray-400">IT Student @ SIT</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-4 py-2 border border-purple-500 text-purple-400 rounded hover:bg-purple-600 hover:text-white transition"
          >
            ✉️ Message
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-80">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Send a Message</h3>
            <input
              type="text"
              placeholder="Your name"
              className="w-full mb-3 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <textarea
              placeholder="Your message"
              className="w-full mb-3 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 text-sm text-gray-400 hover:text-white"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Timeline Section */}
      <div className="mt-20">
        <motion.h2
          className="text-3xl font-bold text-center text-yellow-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📜 My IT Journey
        </motion.h2>

        <VerticalTimeline lineColor="#6b21a8">
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: '#1f2937', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
              date={item.year}
              iconStyle={{ background: '#8b5cf6', color: '#fff' }}
              icon={<SchoolIcon />}
            >
              <h3 className="text-xl font-semibold text-purple-300">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: '#10cc52', color: '#fff' }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default About;
