
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, Lock } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal = ({ onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [usePhoneAuth, setUsePhoneAuth] = useState(false);
  const [step, setStep] = useState('auth'); // 'auth' | 'otp'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (usePhoneAuth && step === 'auth') {
      setStep('otp');
    } else {
      // Handle authentication logic here
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div
        className="relative bg-gradient-to-br from-slate-800/90 to-violet-900/90 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-md w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {step === 'otp' ? 'Enter OTP' : (isLogin ? 'Welcome Back' : 'Create Account')}
          </h2>
          <p className="text-white/70">
            {step === 'otp' 
              ? `We sent a code to ${phoneNumber}`
              : (isLogin ? 'Sign in to your account' : 'Join our premium oil community')
            }
          </p>
        </div>

        <AnimatePresence mode="wait">
          {step === 'auth' ? (
            <motion.form
              key="auth"
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {!isLogin && (
                <div>
                  <label className="block text-white/80 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-violet-400 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div className="flex rounded-xl bg-white/10 p-1">
                <button
                  type="button"
                  onClick={() => setUsePhoneAuth(false)}
                  className={`flex-1 py-3 px-4 rounded-lg transition-all ${
                    !usePhoneAuth ? 'bg-violet-600 text-white' : 'text-white/70'
                  }`}
                >
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setUsePhoneAuth(true)}
                  className={`flex-1 py-3 px-4 rounded-lg transition-all ${
                    usePhoneAuth ? 'bg-violet-600 text-white' : 'text-white/70'
                  }`}
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone
                </button>
              </div>

              <div>
                <label className="block text-white/80 mb-2">
                  {usePhoneAuth ? 'Phone Number' : 'Email Address'}
                </label>
                <input
                  type={usePhoneAuth ? 'tel' : 'email'}
                  value={usePhoneAuth ? phoneNumber : ''}
                  onChange={(e) => usePhoneAuth && setPhoneNumber(e.target.value)}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-violet-400 focus:outline-none transition-colors"
                  placeholder={usePhoneAuth ? '+91 98765 43210' : 'you@example.com'}
                />
              </div>

              {!usePhoneAuth && (
                <div>
                  <label className="block text-white/80 mb-2">Password</label>
                  <input
                    type="password"
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-violet-400 focus:outline-none transition-colors"
                    placeholder="Enter your password"
                  />
                </div>
              )}

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-semibold hover:from-violet-700 hover:to-blue-700 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {usePhoneAuth ? 'Send OTP' : (isLogin ? 'Sign In' : 'Create Account')}
              </motion.button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.form
              key="otp"
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div>
                <label className="block text-white/80 mb-2">Enter 6-digit OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-violet-400 focus:outline-none transition-colors text-center text-2xl tracking-widest"
                  placeholder="000000"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-semibold hover:from-violet-700 hover:to-blue-700 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Verify OTP
              </motion.button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep('auth')}
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Back to phone number
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;
